import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'bemtevi', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'resumo-diario', loadChildren: './componentes/resumo-diario/resumo-diario.module#ResumoDiarioPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
