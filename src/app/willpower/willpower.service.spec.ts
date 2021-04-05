import {TestBed} from '@angular/core/testing';

import {WillpowerService} from './willpower.service';

describe('WillpowerService', () => {
  let service: WillpowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WillpowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
