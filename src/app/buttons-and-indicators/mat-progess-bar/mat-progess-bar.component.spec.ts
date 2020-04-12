import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgessBarComponent } from './mat-progess-bar.component';

describe('MatProgessBarComponent', () => {
  let component: MatProgessBarComponent;
  let fixture: ComponentFixture<MatProgessBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatProgessBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatProgessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
