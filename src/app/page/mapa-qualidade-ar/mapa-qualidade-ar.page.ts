import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.carregarMapa();
  }

  carregarMapa() {
    this.geo = BroadcastService.geolocalizacao;

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

  buscarCidade(event: any | string) {
    BroadcastService.exibirLoading();
    const cidade = event?.target?.value ? event.target.value : event;
    this._qualidadeArService.buscarDadosQualidadeAr(cidade).subscribe((result) => {
      if (result.status === 'error') {
        setTimeout(() => BroadcastService.ocultarLoading());
        this.exibirNomeModal('Aviso', 'Cidade não encontrada');
        return;
      }
      BroadcastService.salvarGeolocalizacao(result.data.city.geo[0], result.data.city.geo[1]);
      BroadcastService.atualizarDadosQualidadeAr(result.data);
      this.carregarMapa();
      BroadcastService.ocultarLoading();
    });
  }

  async exibirNomeModal(titulo: string, conteudo: string) {
    const modal = await this.alertController.create({
      header: titulo,
      message: conteudo,
      buttons: ['fechar'],
    });

    await modal.present();
  }

}
