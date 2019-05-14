import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-diario.page.html',
  styleUrls: ['./resumo-diario.page.scss'],
})
export class ResumoDiarioPage {

  categorias = ['Alimentação', 'Saúde', 'Sono', 'Higiene', 'Interação', 'Comportamento', 'Observação'];

  constructor() { }

}
