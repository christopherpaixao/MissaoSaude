import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerConscientePage } from './comer-consciente.page';

describe('ComerConscientePage', () => {
  let component: ComerConscientePage;
  let fixture: ComponentFixture<ComerConscientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComerConscientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComerConscientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
