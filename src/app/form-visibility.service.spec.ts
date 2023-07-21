import { TestBed } from '@angular/core/testing';

import { FormVisibilityService } from './form-visibility.service';

describe('FormVisibilityService', () => {
  let service: FormVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
