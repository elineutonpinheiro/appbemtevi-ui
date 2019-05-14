import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoDiarioPage } from './resumo-diario.page';

describe('ResumoDiarioPage', () => {
  let component: ResumoDiarioPage;
  let fixture: ComponentFixture<ResumoDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
