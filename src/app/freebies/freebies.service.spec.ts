import {TestBed} from '@angular/core/testing';

import {FreebiesService} from './freebies.service';

describe('FreebiesService', () => {
  let service: FreebiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreebiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
