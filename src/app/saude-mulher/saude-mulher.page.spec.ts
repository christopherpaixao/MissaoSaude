import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeMulherPage } from './saude-mulher.page';

describe('SaudeMulherPage', () => {
  let component: SaudeMulherPage;
  let fixture: ComponentFixture<SaudeMulherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeMulherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudeMulherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
