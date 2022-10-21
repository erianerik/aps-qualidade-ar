import { Component } from '@angular/core';
import { BroadcastService } from './home/service/broadcast/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  exibirLoading: boolean = false;

  constructor() {
    BroadcastService.loadingSubject.subscribe((statusLoading: boolean) => this.exibirLoading = statusLoading);
  }
}
