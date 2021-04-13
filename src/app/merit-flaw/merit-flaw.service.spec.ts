import {TestBed} from '@angular/core/testing';

import {MeritFlawService} from './merit-flaw.service';

describe('MeritFlawService', () => {
  let service: MeritFlawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeritFlawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
