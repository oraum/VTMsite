import {TestBed} from '@angular/core/testing';

import {VirtuesService} from './virtues.service';

describe('VirtuesService', () => {
  let service: VirtuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
