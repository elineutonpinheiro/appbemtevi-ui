import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesRecentesPage } from './atividades-recentes.page';

describe('AtividadesRecentesPage', () => {
  let component: AtividadesRecentesPage;
  let fixture: ComponentFixture<AtividadesRecentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesRecentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesRecentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
