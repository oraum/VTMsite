import {Injectable} from '@angular/core';
import {NamedPoints, NamedPointsGroup, Point, PointsService, Priority} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';

@Injectable({
  providedIn: 'root'
})
export class PathService extends PointsService {

  pathList = ['Humanity', 'Path of Asakku', 'Path of the Beast', 'Path of Blood',
    'Path of Bones', 'Path of Caine', 'Path of Cathari',
    'Path of Death and the Soul', 'Path of Ecstasy', 'Path of Entelechy',
    'Path of Evil Revelations', 'Path of the Feral Heart', 'Path of Harmony',
    'Path of the Hive', 'Path of Honorable Accord', 'Path of Lilith',
    'Path of Metamorphosis', 'Path of Night', 'Path of Orion',
    'Path of Paradox (Mayaparisatya)', 'Path of Paradox (Samsara)',
    'Path of Paradox (Western)', 'Path of Power and the Inner Voice',
    'Path of Redemption', 'Path of Typhon', 'Path of Self-Focus',
    'Path of the Scorched Heart', 'Sharia El-Sama', 'Path of the Warrior'];
  defaultGroups: NamedPointsGroup[] = [];
  priorities: Priority[] = [];
  defaultPoints: NamedPoints = {
    name: 'path',
    points: this.getDefaultPoints()
  };

  constructor(freebieService: FreebiesService) {
    super(freebieService);
  }

  static pointSortFn(a: Point, b: Point): number {
    if (a === Point.None && b !== Point.None) {
      return 1;
    } else if (a !== Point.None && b === Point.None) {
      return -1;
    } else {
      return 0;
    }
  }

  getDefaultPoints(): Point[] {
    return [Point.Original, Point.Original, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None];
  }

  getPoints(virtues: NamedPointsGroup, path: NamedPoints): NamedPoints {
    // TODO: add path points
    const points = [...virtues.values[0].points, ...virtues.values[1].points];
    path.points = points.sort(PathService.pointSortFn);
    return path;
  }
}
