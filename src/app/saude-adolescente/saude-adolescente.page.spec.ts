import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeAdolescentePage } from './saude-adolescente.page';

describe('SaudeAdolescentePage', () => {
  let component: SaudeAdolescentePage;
  let fixture: ComponentFixture<SaudeAdolescentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeAdolescentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudeAdolescentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
