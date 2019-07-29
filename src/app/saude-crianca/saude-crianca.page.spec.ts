import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeCriancaPage } from './saude-crianca.page';

describe('SaudeCriancaPage', () => {
  let component: SaudeCriancaPage;
  let fixture: ComponentFixture<SaudeCriancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeCriancaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudeCriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
