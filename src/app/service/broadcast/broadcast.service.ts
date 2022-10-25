import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  public static loadingSubject = new Subject<boolean>();
  public static qualidadeArSubject = new Subject<any>();
  public static geolocalizacao = {
    latitude: 0,
    longitude: 0,
  };

  constructor() { }

  static ocultarLoading() {
    this.loadingSubject.next(false);
  }

  static exibirLoading() {
    this.loadingSubject.next(true);
  }

  static salvarGeolocalizacao(latitude: number, longitude: number) {
    this.geolocalizacao.latitude = latitude;
    this.geolocalizacao.longitude = longitude;
  }

  static atualizarDadosQualidadeAr(resultadoBuscaCidade: any) {
    this.qualidadeArSubject.next(resultadoBuscaCidade);
  }

}
