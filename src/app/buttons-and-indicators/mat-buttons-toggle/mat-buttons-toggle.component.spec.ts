import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonsToggleComponent } from './mat-buttons-toggle.component';

describe('MatButtonsToggleComponent', () => {
  let component: MatButtonsToggleComponent;
  let fixture: ComponentFixture<MatButtonsToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatButtonsToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatButtonsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
