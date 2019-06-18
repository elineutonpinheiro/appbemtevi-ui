import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'bemtevi', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'resumo-diario', loadChildren: './componentes/resumo-diario/resumo-diario.module#ResumoDiarioPageModule' },
  { path: 'atividades-recentes', loadChildren: './componentes/atividades-recentes/atividades-recentes.module#AtividadesRecentesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
