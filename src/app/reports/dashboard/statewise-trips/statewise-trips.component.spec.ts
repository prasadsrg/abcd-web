import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewiseTripsComponent } from './statewise-trips.component';

describe('StatewiseTripsComponent', () => {
  let component: StatewiseTripsComponent;
  let fixture: ComponentFixture<StatewiseTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatewiseTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatewiseTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
