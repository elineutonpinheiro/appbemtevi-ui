import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtividadesRecentesPage } from './atividades-recentes.page';

const routes: Routes = [
  {
    path: '',
    component: AtividadesRecentesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AtividadesRecentesPage]
})
export class AtividadesRecentesPageModule {}
