import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'atividades',
        children: [
          {
            path: '',
            loadChildren: '../atividades/atividades.module#AtividadesPageModule'
          }
        ]
      },
      {
        path: 'avaliacoes',
        children: [
          {
            path: '',
            loadChildren: '../avaliacoes/avaliacoes.module#AvaliacoesPageModule'
          }
        ]
      },
      {
        path: 'estatisticas',
        children: [
          {
            path: '',
            loadChildren: '../estatisticas/estatisticas.module#EstatisticasPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
