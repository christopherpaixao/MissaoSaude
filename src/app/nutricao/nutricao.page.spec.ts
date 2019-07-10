import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricaoPage } from './nutricao.page';

describe('NutricaoPage', () => {
  let component: NutricaoPage;
  let fixture: ComponentFixture<NutricaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
