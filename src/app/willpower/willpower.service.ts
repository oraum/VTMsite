import {Injectable} from '@angular/core';
import {NamedPoints, NamedPointsGroup, Point, PointsService} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';
import {PathService} from '../path/path.service';

@Injectable({
  providedIn: 'root'
})
export class WillpowerService extends PointsService {

  defaultGroups: NamedPointsGroup[] = [{
    name: 'willpower', availablePoints: 0, freebieCost: 2, values: [{
      name: 'willpower',
      points: [Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None]
    }],
  }];
  priorities = [];

  constructor(freebieService: FreebiesService) {
    super(freebieService);
  }

  getDefaultPoints(): Point[] {
    return [Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None];
  }

  mergePoints(willpower: NamedPoints | undefined, virtues: NamedPoints | undefined): Point[] {
    // from virtues take original points, freebies from willpower, add default points to ensure there are always 10 points
    const points = [...virtues?.points.filter((p: Point) => (p === Point.Original)) ?? [],
      ...willpower?.points.filter((p: Point) => (p === Point.Freebie)) ?? [], ...this.getDefaultPoints()];
    return points.sort(PathService.pointSortFn).slice(0, 10);
  }
}
