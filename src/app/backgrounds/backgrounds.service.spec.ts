import {TestBed} from '@angular/core/testing';

import {BackgroundsService} from './backgrounds.service';

describe('BackgroundsService', () => {
  let service: BackgroundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
