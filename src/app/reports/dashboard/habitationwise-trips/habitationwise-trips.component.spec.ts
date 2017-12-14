import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationwiseTripsComponent } from './habitationwise-trips.component';

describe('HabitationwiseTripsComponent', () => {
  let component: HabitationwiseTripsComponent;
  let fixture: ComponentFixture<HabitationwiseTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitationwiseTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitationwiseTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
