import { ResumoDiarioPage } from './../componentes/resumo-diario/resumo-diario.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  //Para criar um componente a ser usuado em varios locais CRIAR um componente.module.ts, 
  //DECLARAR o componente e IMPORTA no arquivo.modulo.ts onde o componente será usado.
  declarations: [HomePage, ResumoDiarioPage]
})
export class HomePageModule {}
