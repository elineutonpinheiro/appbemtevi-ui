import { AtividadesRecentesPage } from './atividades-recentes/atividades-recentes.page';
import { AtividadesPage } from './../atividades/atividades.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//Neste arquivo devem estar todos os componentes: Resumo Diário, Info, Atividades Recentes...

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
  declarations: [AtividadesPage]
})
export class ResumoDiarioPageModule {}
