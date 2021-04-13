import {TestBed} from '@angular/core/testing';

import {PathService} from './path.service';
import {Point} from '../points.service';

describe('PathService', () => {
  let service: PathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort correct', () => {
    expect(PathService.pointSortFn(Point.None, Point.Original)).toBeGreaterThan(0);
    expect(PathService.pointSortFn(Point.None, Point.Freebie)).toBeGreaterThan(0);
    expect(PathService.pointSortFn(Point.Original, Point.Original)).toBe(0);
    expect(PathService.pointSortFn(Point.Freebie, Point.Freebie)).toBe(0);
    expect(PathService.pointSortFn(Point.None, Point.None)).toBe(0);
    expect(PathService.pointSortFn(Point.Original, Point.Freebie)).toBe(0);
    expect(PathService.pointSortFn(Point.Original, Point.None)).toBeLessThan(0);
    expect(PathService.pointSortFn(Point.Freebie, Point.None)).toBeLessThan(0);

    const points = [Point.None, Point.Original, Point.Freebie];
    const pointsSorted = points.sort(PathService.pointSortFn);
    expect(pointsSorted).toEqual([Point.Original, Point.Freebie, Point.None]);
  });
});
