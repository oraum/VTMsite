import {PointsService} from './points.service';

describe('PointsService', () => {
  let service: PointsService;

  beforeEach(() => {
    service = new TestPointService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should merge data', () => {
    const savedData = [{name: 'Test', values: [{name: 'Godlike', points: 100}], priority: 'primary'}];

    expect(service.getGroups([])).toEqual(service.defaultGroups);
    expect(service.getGroups(savedData)).toEqual(savedData);
  });

  class TestPointService extends PointsService {
    defaultGroups = [{name: 'Test', values: [{name: 'Godlike', points: 0}], priority: 'unknown'}];
    priorities = [];
  }
});
