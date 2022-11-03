import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaQualidadeArPage } from './mapa-qualidade-ar.page';

const routes: Routes = [
  {
    path: '',
    component: MapaQualidadeArPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaQualidadeArPageRoutingModule {}
