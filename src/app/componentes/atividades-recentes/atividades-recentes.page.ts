import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividades-recentes',
  templateUrl: './atividades-recentes.page.html',
  styleUrls: ['./atividades-recentes.page.scss'],
})
export class AtividadesRecentesPage implements OnInit {

  titulo = ['Dança', 'Leitura', 'Artes'];
  atividadesRecentes = [];
  //Criar aqui a estrutura em que uma atividade tem titulo, descrição, data de criação, etc..

  constructor() { 

    for (let index = 0; index < this.titulo.length; index++) {
      this.atividadesRecentes.push(this.titulo.values);
      console.log(this.atividadesRecentes);
    }
    
  }

  ngOnInit() {
  }

}
