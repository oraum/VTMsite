import {TestBed} from '@angular/core/testing';

import {AttributesService} from './attributes.service';

describe('AttributesService', () => {
  let service: AttributesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain priorities', () => {
    expect(service.priorities).toBeTruthy();
    expect(service.priorities).toHaveSize(3);
  });

  it('should contain default attributes', () => {
    expect(service.defaultGroups).toBeTruthy();
    expect(service.defaultGroups).toHaveSize(3);
    expect(service.defaultGroups[0].values).toHaveSize(3);
  });
});
