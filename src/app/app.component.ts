import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcastService } from './service/broadcast/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  exibirLoading: boolean = false;

  constructor(
    private _router: Router
  ) {
    BroadcastService.loadingSubject.subscribe((statusLoading: boolean) => this.exibirLoading = statusLoading);
  }
  ngOnInit(): void {
    this._router.navigate(['/home']);
  }

}
