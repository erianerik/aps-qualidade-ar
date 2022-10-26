import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Particulas } from '../model/particulas';
import { QualidadeAr } from '../model/qualidade-ar';
import { BroadcastService } from '../service/broadcast/broadcast.service';
import { QualidadeArServiceService } from '../service/qualidade-ar-service/qualidade-ar-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('backgroundColorCabecalho') input;
  @ViewChild('popover') popover;

  qualidadeAr = new QualidadeAr();
  particulas: Particulas[] = [];
  textoQualidadeAr: string = '';
  cidadeNaoEncontrada = false;
  isOpen = false;

  constructor(
    private _qualidadeArService: QualidadeArServiceService,
    private alertController: AlertController
  ) {
    BroadcastService.qualidadeArSubject.subscribe((qualidadeAr: any) => {
      this.valorizarQualidadeAr(qualidadeAr);
    });
  }

  ngOnInit(): void {
    this.buscarCidade('São Paulo');
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
      this.valorizarQualidadeAr(result.data)
      BroadcastService.salvarGeolocalizacao(result.data.city.geo[0], result.data.city.geo[1]);
    });
  }

  valorizarQualidadeAr(dadosQualidade: any) {
    const nomeInstituto: string = dadosQualidade.attributions[0].name;

    this.particulas = [];
    this.qualidadeAr.cidade = dadosQualidade.city.name;
    this.qualidadeAr.dataUltimaAtualizacao = dadosQualidade.time.s;
    this.qualidadeAr.fonte = dadosQualidade.attributions[0].url;
    this.qualidadeAr.indiceQualidadeAr = dadosQualidade.aqi;
    this.qualidadeAr.nomeInstitutoCompleto = nomeInstituto;
    this.qualidadeAr.nomeInstituto = nomeInstituto;
    this.qualidadeAr.dataUltimaAtualizacao = dadosQualidade.time.s.split(' ')[1];
    this.qualidadeAr.particulasAr = dadosQualidade.iaqi;
    Object.keys(this.qualidadeAr.particulasAr).forEach((nome) => this.particulas.push({ nome: nome.toUpperCase(), valor: 0 }));
    Object.entries(this.qualidadeAr.particulasAr).forEach((valor, index) => this.particulas[index].valor = valor[1].v);
    this.verificarQualidadeAr(this.qualidadeAr.indiceQualidadeAr);
  }

  verificarQualidadeAr(indiceQualidadeAr: number) {
    let qualidadeArCor: string;
    let textoQualidadeAr: string;

    if (indiceQualidadeAr >= 0 && indiceQualidadeAr <= 50) {
      qualidadeArCor = '#009966';
      textoQualidadeAr = 'Boa';
    }
    if (indiceQualidadeAr >= 51 && indiceQualidadeAr <= 100) {
      qualidadeArCor = '#F2B705';
      textoQualidadeAr = 'Moderada';
    }
    if (indiceQualidadeAr >= 101 && indiceQualidadeAr <= 150) {
      qualidadeArCor = '#FF9933';
      textoQualidadeAr = 'Pouco saúdavel para grupos sensiveís';
    }
    if (indiceQualidadeAr >= 151 && indiceQualidadeAr <= 200) {
      qualidadeArCor = '#CC0033';
      textoQualidadeAr = 'Pouco saúdavel';
    }
    if (indiceQualidadeAr >= 201 && indiceQualidadeAr <= 300) {
      qualidadeArCor = '#660099';
      textoQualidadeAr = 'Muito prejudicial à saúde';
    }
    if (indiceQualidadeAr > 300) {
      qualidadeArCor = '#7E0023';
      textoQualidadeAr = 'Perigosa';
    }

    this.qualidadeAr.situacaoQualidadeAr = textoQualidadeAr;
    this.input.nativeElement.style.backgroundColor = qualidadeArCor;
    setTimeout(() => document.querySelectorAll('.qualidade-cor').forEach((element: any) => element.style.color = qualidadeArCor));
    setTimeout(() => BroadcastService.ocultarLoading());
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
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
