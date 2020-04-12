import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAndIndicatorsComponent } from './buttons-and-indicators.component';

describe('ButtonsAndIndicatorsComponent', () => {
  let component: ButtonsAndIndicatorsComponent;
  let fixture: ComponentFixture<ButtonsAndIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsAndIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsAndIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
