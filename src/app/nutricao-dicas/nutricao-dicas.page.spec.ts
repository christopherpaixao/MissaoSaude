import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricaoDicasPage } from './nutricao-dicas.page';

describe('NutricaoDicasPage', () => {
  let component: NutricaoDicasPage;
  let fixture: ComponentFixture<NutricaoDicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricaoDicasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricaoDicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
