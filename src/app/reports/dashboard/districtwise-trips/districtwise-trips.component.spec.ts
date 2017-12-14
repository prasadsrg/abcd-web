import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictwiseTripsComponent } from './districtwise-trips.component';

describe('DistrictwiseTripsComponent', () => {
  let component: DistrictwiseTripsComponent;
  let fixture: ComponentFixture<DistrictwiseTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictwiseTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictwiseTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
