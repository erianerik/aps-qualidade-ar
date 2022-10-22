import { Component, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/service/broadcast/broadcast.service';
import { QualidadeArServiceService } from 'src/app/service/qualidade-ar-service/qualidade-ar-service.service';

declare var google: any;

@Component({
  selector: 'app-mapa-qualidade-ar',
  templateUrl: './mapa-qualidade-ar.page.html',
  styleUrls: ['./mapa-qualidade-ar.page.scss'],
})
export class MapaQualidadeArPage implements OnInit {

  geo: any;
  map: any;

  constructor(
    private _qualidadeArService: QualidadeArServiceService,
  ) { }

  ngOnInit() {
    this.carregarMapa();
  }

  carregarMapa() {
    this.geo = BroadcastService.geolocalizacao;
    if (this.geo.latitude === 0 && this.geo.longitude === 0) { this.buscarCidade() };

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(this.geo.latitude, this.geo.longitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 11
    });

    let waqiMapOverlay = new google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        return 'https://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=_TOKEN_ID_";
      },
      name: "Qualidade do ar",
    });

    this.map.overlayMapTypes.insertAt(0, waqiMapOverlay);

  }

  eventoBlur(event: any) {
    event.preventDefault();
  }

  buscarCidade() {
    BroadcastService.exibirLoading();
    this._qualidadeArService.buscarDadosQualidadeAr('São Paulo').subscribe((result) => {
      this.geo.latitude = result.data.city.geo[0];
      this.geo.longitude = result.data.city.geo[1];
      BroadcastService.ocultarLoading();
    });
  }
}
