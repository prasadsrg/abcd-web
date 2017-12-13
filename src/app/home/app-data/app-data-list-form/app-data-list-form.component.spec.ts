import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDataListFormComponent } from './app-data-list-form.component';

describe('AppDataListFormComponent', () => {
  let component: AppDataListFormComponent;
  let fixture: ComponentFixture<AppDataListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDataListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDataListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
