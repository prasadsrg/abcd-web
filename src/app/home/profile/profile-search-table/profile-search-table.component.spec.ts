import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSearchTableComponent } from './profile-search-table.component';

describe('ProfileSearchTableComponent', () => {
  let component: ProfileSearchTableComponent;
  let fixture: ComponentFixture<ProfileSearchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSearchTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
