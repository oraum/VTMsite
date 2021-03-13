import {Injectable} from '@angular/core';
import {NamedPointsGroup, Point, PointsService} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';

@Injectable({
  providedIn: 'root'
})
export class VirtuesService extends PointsService {

  defaultGroups: NamedPointsGroup[] = [{
    name: 'virtues', availablePoints: 7, values: [
      {name: 'Conscience/Conviction', points: this.getDefaultPoints()},
      {name: 'Self-Control/Instinct', points: this.getDefaultPoints()},
      {name: 'Courage', points: this.getDefaultPoints()}
    ]
  }];
  priorities = [];

  constructor(freebieService: FreebiesService) {
    super(freebieService);
  }

  getDefaultPoints(): Point[] {
    return [Point.Original, Point.None, Point.None, Point.None, Point.None];
  }
}
