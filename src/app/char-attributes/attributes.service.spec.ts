import {TestBed} from '@angular/core/testing';

import {AttributesService} from './attributes.service';
import {NamedPoints, NamedPointsGroup, Point, PointsService} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';

describe('AttributesService', () => {
  let service: AttributesService;
  let freebiesService: FreebiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributesService);
    freebiesService = TestBed.inject(FreebiesService);
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

  it('should reduce points', () => {
    const value: NamedPoints = {name: 'test', points: [Point.Original, Point.Original, Point.Original, Point.Freebie, Point.None]};
    const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 0, freebieCost: 5, minPoints: 1};
    expect(PointsService.pointsToNumber(value.points)).toEqual(4);
    service.reducePoints(5, grp, value);
    expect(PointsService.pointsToNumber(value.points)).toEqual(4);
    expect(freebiesService.points).toEqual(15);
    service.reducePoints(1, grp, value);
    expect(grp.availablePoints).toEqual(2);
    expect(PointsService.pointsToNumber(value.points)).toEqual(1);
    expect(freebiesService.points).toEqual(20);
  });
});
