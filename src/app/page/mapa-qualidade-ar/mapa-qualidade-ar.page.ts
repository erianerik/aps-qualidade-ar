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

  geo: any = {
    latitude: 0,
    longitude: 0,
  };

  map: any;

  constructor(
    private _qualidadeArService: QualidadeArServiceService,
  ) {

    BroadcastService.qualidadeArSubject.subscribe((result) => {
      this.geo = result;
      this.carregarMapa(result.latitude, result.longitude);
    });
  }

  ngOnInit() {
    this.buscarCidade();
  }

  carregarMapa(latitude: number, longitude: number) {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(latitude, longitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 15
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
    if (this.geo.latitude === 0 && this.geo.longitude === 0) {
      this._qualidadeArService.buscarDadosQualidadeAr('São Paulo').subscribe((result) => {
        this.carregarMapa(result.data.city.geo[0], result.data.city.geo[1]);
        BroadcastService.ocultarLoading();
      });
    }

    this.carregarMapa(BroadcastService.geolocalizacao.latitude, BroadcastService.geolocalizacao.longitude);
  }
}
