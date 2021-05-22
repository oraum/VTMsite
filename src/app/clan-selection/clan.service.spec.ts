import { TestBed } from '@angular/core/testing';

import { ClanService } from './clan.service';

describe('ClanService', () => {
  let service: ClanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have clan filters', () => {
    expect(service.clanFilters).toBeTruthy();
    expect(service.clanFilters.length > 0).toBeTrue();
  });

  it('should have clan list', () => {
    expect(service.clanList).toBeTruthy();
    expect(service.clanList.length > 0).toBeTrue();
  });

  it('should filter clans', () => {
    expect(service.getFilteredClans('All').length).toBe(34);
    expect(service.getFilteredClans('Sabbat').length).toBe(7);
    expect(service.getFilteredClans('non').length).toBe(0);
  });
});
