import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeHomemPage } from './saude-homem.page';

describe('SaudeHomemPage', () => {
  let component: SaudeHomemPage;
  let fixture: ComponentFixture<SaudeHomemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeHomemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudeHomemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
