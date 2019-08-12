import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilharPage } from './compartilhar.page';

describe('CompartilharPage', () => {
  let component: CompartilharPage;
  let fixture: ComponentFixture<CompartilharPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartilharPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartilharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
