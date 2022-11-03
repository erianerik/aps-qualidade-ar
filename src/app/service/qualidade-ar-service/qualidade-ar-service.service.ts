import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualidadeArServiceService {

  private urlBase = 'https://api.waqi.info/feed/';
  private tokenApi = '/?token=3c3d06b7de4b8ac40415b031bbb02dd4c3aeb087';

  constructor(
    private _httpCliente: HttpClient
  ) { }


  buscarDadosQualidadeAr(cidade: string): Observable<any> {
    return this._httpCliente.get(this.urlBase.concat(cidade).concat(this.tokenApi));

  }

}
