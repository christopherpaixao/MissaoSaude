import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaSaudavelPage } from './coluna-saudavel.page';

describe('ColunaSaudavelPage', () => {
  let component: ColunaSaudavelPage;
  let fixture: ComponentFixture<ColunaSaudavelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColunaSaudavelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColunaSaudavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
