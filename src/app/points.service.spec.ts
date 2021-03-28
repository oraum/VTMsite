import {NamedPoints, NamedPointsGroup, Point, PointsService} from './points.service';
import {FreebiesService} from './freebies/freebies.service';

describe('PointsService', () => {
  let service: PointsService;
  let freebiesService: FreebiesService;

  beforeEach(() => {
    freebiesService = new FreebiesService();
    service = new TestPointService(freebiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should merge data', () => {
    const savedData = [{
      name: 'Test',
      values: [{name: 'Godlike', points: [Point.Original], value: 'Test'}],
      priority: 'primary',
      availablePoints: 1
    }];

    expect(service.getGroups([])).toEqual(service.defaultGroups);
    expect(service.getGroups(savedData)).toEqual(savedData);
  });

  it('should count points', () => {
    const onePoint = [Point.Original, Point.None];
    const mixPoints = [Point.None, Point.None, Point.Original, Point.Freebie, Point.None];

    expect(PointsService.pointsToNumber(onePoint)).toEqual(1);
    expect(PointsService.pointsToNumber(mixPoints)).toEqual(2);
  });

  describe('PointService.pointSelection', () => {
    describe('increase no freebie mode', () => {
      it('should add points and decrease available', () => {
        const value: NamedPoints = {name: 'test', points: [Point.None, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2};
        service.pointSelection(1, grp, value);
        expect(grp.availablePoints).toEqual(1);
        expect(PointsService.pointsToNumber(value.points)).toEqual(1);
        expect(value.points).toEqual([Point.Original, Point.None, Point.None]);
      });
      it('should not change if try to select more than available', () => {
        const value: NamedPoints = {name: 'test', points: [Point.None, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2};
        expect(service.pointSelection(3, grp, value)).toBeNull();
        expect(grp.availablePoints).toEqual(2);
        expect(PointsService.pointsToNumber(value.points)).toEqual(0);
        expect(value.points).toEqual([Point.None, Point.None, Point.None]);
      });
      it('should not change if value not editable', () => {
        const value: NamedPoints = {name: 'test', points: [Point.None, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2};
        expect(service.pointSelection(1, grp, {editable: false, ...value})).toBeNull();
        expect(grp.availablePoints).toEqual(2);
        expect(PointsService.pointsToNumber(value.points)).toEqual(0);
        expect(value.points).toEqual([Point.None, Point.None, Point.None]);
      });
    });

    describe('decrease no freebie mode', () => {
      it('should remove points and increase available', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.Original, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2, minPoints: 0};
        service.pointSelection(1, grp, value);
        expect(grp.availablePoints).toEqual(3);
        expect(PointsService.pointsToNumber(value.points)).toEqual(1);
        expect(value.points).toEqual([Point.Original, Point.None, Point.None]);
      });
      it('should remove last point and increase available', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2, minPoints: 0};
        service.pointSelection(1, grp, value);
        expect(grp.availablePoints).toEqual(3);
        expect(PointsService.pointsToNumber(value.points)).toEqual(0);
        expect(value.points).toEqual([Point.None, Point.None, Point.None]);
      });
      it('should not remove last point with min', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2, minPoints: 1};
        service.pointSelection(1, grp, value);
        expect(grp.availablePoints).toEqual(2);
        expect(PointsService.pointsToNumber(value.points)).toEqual(1);
        expect(value.points).toEqual([Point.Original, Point.None, Point.None]);
      });
      it('should not set less than min', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2, minPoints: 1};
        service.pointSelection(0, grp, value);
        expect(grp.availablePoints).toEqual(2);
        expect(PointsService.pointsToNumber(value.points)).toEqual(1);
        expect(value.points).toEqual([Point.Original, Point.None, Point.None]);
      });
    });
    describe('increase freebie mode', () => {
      beforeEach(() => {
        freebiesService.toggleFreebieMode();
        expect(freebiesService.freebieModeActive).toBeTrue();
      });
      it('should add points and decrease available', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 0, freebieCost: 5};
        service.pointSelection(2, grp, value);
        expect(grp.availablePoints).toEqual(0);
        expect(freebiesService.points).toEqual(10);
        expect(PointsService.pointsToNumber(value.points)).toEqual(2);
        expect(value.points).toEqual([Point.Original, Point.Freebie, Point.None]);
      });
      it('should not change if try to select more than available', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 0, freebieCost: 5};
        freebiesService.points = 4;
        expect(service.pointSelection(2, grp, value)).toBeNull();
        expect(grp.availablePoints).toEqual(0);
        expect(freebiesService.points).toEqual(4);
        expect(PointsService.pointsToNumber(value.points)).toEqual(1);
        expect(value.points).toEqual([Point.Original, Point.None, Point.None]);
      });
      it('should not change points if value not editable', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2};
        expect(service.pointSelection(1, grp, {editable: false, ...value})).toBeNull();
        expect(grp.availablePoints).toEqual(2);
        expect(PointsService.pointsToNumber(value.points)).toEqual(1);
        expect(value.points).toEqual([Point.Original, Point.None, Point.None]);
      });
    });
    describe('decrease freebie mode', () => {
      beforeEach(() => {
        freebiesService.toggleFreebieMode();
        expect(freebiesService.freebieModeActive).toBeTrue();
      });

      it('should remove points and increase available', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.Freebie, Point.Freebie]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 0, freebieCost: 5};
        service.pointSelection(2, grp, value);
        expect(grp.availablePoints).toEqual(0);
        expect(freebiesService.points).toEqual(20);
        expect(PointsService.pointsToNumber(value.points)).toEqual(2);
        expect(value.points).toEqual([Point.Original, Point.Freebie, Point.None]);
      });

      it('should not remove original points', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.Original, Point.Original]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 0, freebieCost: 5};
        service.pointSelection(1, grp, value);
        expect(grp.availablePoints).toEqual(0);
        expect(freebiesService.points).toEqual(15);
        expect(PointsService.pointsToNumber(value.points)).toEqual(3);
        expect(value.points).toEqual([Point.Original, Point.Original, Point.Original]);
      });
      it('should remove last point ', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Freebie, Point.None, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 2, minPoints: 0, freebieCost: 5};
        expect(freebiesService.points).toEqual(15);
        service.pointSelection(1, grp, value);
        expect(grp.availablePoints).toEqual(2);
        expect(freebiesService.points).toEqual(20);
        expect(PointsService.pointsToNumber(value.points)).toEqual(0);
        expect(value.points).toEqual([Point.None, Point.None, Point.None]);
      });
      it('should remove points and increase available 2', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.Freebie, Point.Freebie]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 0, freebieCost: 5};
        expect(freebiesService.points).toEqual(15);
        service.pointSelection(1, grp, value);
        expect(grp.availablePoints).toEqual(0);
        expect(freebiesService.points).toEqual(25);
        expect(PointsService.pointsToNumber(value.points)).toEqual(1);
        expect(value.points).toEqual([Point.Original, Point.None, Point.None]);
      });
      it('should not add points when selecting minPoints', () => {
        const value: NamedPoints = {name: 'test', points: [Point.Original, Point.Freebie, Point.None]};
        const grp: NamedPointsGroup = {name: 'testgrp', values: [value], availablePoints: 0, freebieCost: 5, minPoints: 1};
        service.getDefaultPoints = () => ([Point.Original, Point.None, Point.None]);
        expect(freebiesService.points).toEqual(15);
        service.pointSelection(1, grp, value);
        service.pointSelection(1, grp, value);
        expect(grp.availablePoints).toEqual(0);
        expect(freebiesService.points).toEqual(20);
        expect(PointsService.pointsToNumber(value.points)).toEqual(1);
        expect(value.points).toEqual([Point.Original, Point.None, Point.None]);
      });
    });
  });

  class TestPointService extends PointsService {
    defaultGroups = [{name: 'Test', values: [{name: 'Godlike', points: []}], priority: 'unknown', availablePoints: 0}];
    priorities = [];

    getDefaultPoints(): Point[] {
      return [Point.None, Point.None, Point.None];
    }
  }
});
