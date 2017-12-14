import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalwiseTripsComponent } from './mandalwise-trips.component';

describe('MandalwiseTripsComponent', () => {
  let component: MandalwiseTripsComponent;
  let fixture: ComponentFixture<MandalwiseTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandalwiseTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalwiseTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
