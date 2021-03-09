import {Point, PointsService} from './points.service';
import {FreebiesService} from './freebies/freebies.service';

describe('PointsService', () => {
  let service: PointsService;

  beforeEach(() => {
    service = new TestPointService(new FreebiesService());
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

  class TestPointService extends PointsService {
    defaultGroups = [{name: 'Test', values: [{name: 'Godlike', points: []}], priority: 'unknown', availablePoints: 0}];
    priorities = [];

    getDefaultPoints(): Point[] {
      return [];
    }
  }
});
