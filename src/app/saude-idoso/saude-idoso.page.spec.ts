import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeIdosoPage } from './saude-idoso.page';

describe('SaudeIdosoPage', () => {
  let component: SaudeIdosoPage;
  let fixture: ComponentFixture<SaudeIdosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeIdosoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudeIdosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
