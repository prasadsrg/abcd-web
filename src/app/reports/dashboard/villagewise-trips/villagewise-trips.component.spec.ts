import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagewiseTripsComponent } from './villagewise-trips.component';

describe('VillagewiseTripsComponent', () => {
  let component: VillagewiseTripsComponent;
  let fixture: ComponentFixture<VillagewiseTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagewiseTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagewiseTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
