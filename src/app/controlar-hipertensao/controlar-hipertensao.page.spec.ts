import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarHipertensaoPage } from './controlar-hipertensao.page';

describe('ControlarHipertensaoPage', () => {
  let component: ControlarHipertensaoPage;
  let fixture: ComponentFixture<ControlarHipertensaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarHipertensaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarHipertensaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
