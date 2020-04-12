import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonsComponent } from './mat-buttons.component';

describe('MatButtonsComponent', () => {
  let component: MatButtonsComponent;
  let fixture: ComponentFixture<MatButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
