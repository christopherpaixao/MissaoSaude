import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeMentalPage } from './saude-mental.page';

describe('SaudeMentalPage', () => {
  let component: SaudeMentalPage;
  let fixture: ComponentFixture<SaudeMentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeMentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudeMentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
