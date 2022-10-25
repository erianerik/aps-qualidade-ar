import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'mapa-qualidade-ar',
    loadChildren: () => import('./page/mapa-qualidade-ar/mapa-qualidade-ar.module').then(m => m.MapaQualidadeArPageModule)
  },
  {
    path: 'informacoes-adicionais',
    loadChildren: () => import('./page/informacoes-adicionais/informacoes-adicionais/informacoes-adicionais.module').then(m => m.InformacoesAdicionaisPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
