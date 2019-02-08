import { TestBed } from '@angular/core/testing';

import { NgjDatepickerService } from './ngj-datepicker.service';

describe('NgjDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgjDatepickerService = TestBed.get(NgjDatepickerService);
    expect(service).toBeTruthy();
  });
});
