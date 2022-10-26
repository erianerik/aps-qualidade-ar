import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacoesAdicionaisPageRoutingModule } from './informacoes-adicionais-routing.module';

import { InformacoesAdicionaisPage } from './informacoes-adicionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacoesAdicionaisPageRoutingModule
  ],
  declarations: [InformacoesAdicionaisPage]
})
export class InformacoesAdicionaisPageModule {}
