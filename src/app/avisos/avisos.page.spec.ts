import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosPage } from './avisos.page';

describe('AvisosPage', () => {
  let component: AvisosPage;
  let fixture: ComponentFixture<AvisosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
