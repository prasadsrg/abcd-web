import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchayatwiseTripsComponent } from './panchayatwise-trips.component';

describe('PanchayatwiseTripsComponent', () => {
  let component: PanchayatwiseTripsComponent;
  let fixture: ComponentFixture<PanchayatwiseTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanchayatwiseTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanchayatwiseTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
