import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  public static loadingSubject = new Subject<boolean>();

  constructor() { }

  static ocultarLoading() {
    this.loadingSubject.next(false);
  }

  static exibirLoading() {
    this.loadingSubject.next(true);
  }

}
