import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgjDatepickerComponent } from './ngj-datepicker.component';

describe('NgjDatepickerComponent', () => {
  let component: NgjDatepickerComponent;
  let fixture: ComponentFixture<NgjDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgjDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgjDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
