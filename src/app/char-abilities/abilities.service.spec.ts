import {TestBed} from '@angular/core/testing';

import {AbilitiesService} from './abilities.service';

describe('AbilitiesService', () => {
  let service: AbilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain priorities', () => {
    expect(service.priorities).toBeTruthy();
    expect(service.priorities).toHaveSize(3);
  });

  it('should contain default abilities', () => {
    expect(service.defaultGroups).toBeTruthy();
    expect(service.defaultGroups).toHaveSize(3);
    expect(service.defaultGroups[0].values).toHaveSize(11);
  });
});
