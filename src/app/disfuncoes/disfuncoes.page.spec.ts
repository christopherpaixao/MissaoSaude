import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisfuncoesPage } from './disfuncoes.page';

describe('DisfuncoesPage', () => {
  let component: DisfuncoesPage;
  let fixture: ComponentFixture<DisfuncoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisfuncoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisfuncoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
