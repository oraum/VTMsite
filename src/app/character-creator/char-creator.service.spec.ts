import {TestBed} from '@angular/core/testing';

import {CharCreatorService} from './char-creator.service';

describe('CharCreatorService', () => {
  let service: CharCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have generations', () => {
    expect(service.generations).toBeTruthy();
    expect(service.generations.length > 0).toBeTrue();
  });

  it('should have a natureDemeanorList', () => {
    expect(service.natureDemeanorList).toBeTruthy();
    expect(service.natureDemeanorList.length > 0).toBeTrue();
  });
});
