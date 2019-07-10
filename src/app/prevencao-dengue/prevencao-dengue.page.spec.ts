import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevencaoDenguePage } from './prevencao-dengue.page';

describe('PrevencaoDenguePage', () => {
  let component: PrevencaoDenguePage;
  let fixture: ComponentFixture<PrevencaoDenguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevencaoDenguePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevencaoDenguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
