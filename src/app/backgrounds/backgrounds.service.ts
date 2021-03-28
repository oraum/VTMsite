import {Injectable} from '@angular/core';
import {NamedPointsGroup, Point, PointsService, Priority} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundsService extends PointsService {

  defaultGroups: NamedPointsGroup[] = [{
    name: 'backgrounds',
    availablePoints: 5,
    values: [{name: 'b0', points: this.getDefaultPoints()}],
    freebieCost: 1
  }];
  priorities: Priority[] = [];

  backgroundList = ['', 'Allies', 'Alternate Identity', 'Black Hand Membership',
    'Contacts', 'Domain', 'Fame', 'Generation',
    'Herd', 'Influence', 'Mentor', 'Resources',
    'Retainers', 'Rituals', 'Status'];

  constructor(freebieService: FreebiesService) {
    super(freebieService);
  }

  getDefaultPoints(): Point[] {
    return [Point.None, Point.None, Point.None, Point.None, Point.None];
  }
}
