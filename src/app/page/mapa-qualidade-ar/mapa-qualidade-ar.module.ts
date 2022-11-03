import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaQualidadeArPageRoutingModule } from './mapa-qualidade-ar-routing.module';

import { MapaQualidadeArPage } from './mapa-qualidade-ar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaQualidadeArPageRoutingModule
  ],
  declarations: [MapaQualidadeArPage]
})
export class MapaQualidadeArPageModule {}
