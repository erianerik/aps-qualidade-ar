import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacoesAdicionaisPage } from './informacoes-adicionais.page';

const routes: Routes = [
  {
    path: '',
    component: InformacoesAdicionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacoesAdicionaisPageRoutingModule {}
