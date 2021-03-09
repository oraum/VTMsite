import {Injectable} from '@angular/core';
import {NamedPointsGroup, Point, PointsService, Priority} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';

@Injectable({
  providedIn: 'root'
})
export class AttributesService extends PointsService {
  constructor(freebieService: FreebiesService) {
    super(freebieService);
  }

  priorities: Priority[] = [
    {name: 'Primary', availablePoints: 7},
    {name: 'Secondary', availablePoints: 5},
    {name: 'Tertiary', availablePoints: 3}];
  defaultGroups: NamedPointsGroup[] = [
    {
      name: 'Physical',
      values: [{name: 'Strength', points: this.getDefaultPoints()}, {
        name: 'Dexterity',
        points: this.getDefaultPoints()
      }, {
        name: 'Stamina',
        points: this.getDefaultPoints()
      }],
      priority: undefined,
      availablePoints: -1,
      minPoints: 1,
      freebieCost: 5
    },
    {
      name: 'Social',
      values: [{name: 'Charisma', points: this.getDefaultPoints()}, {
        name: 'Manipulation',
        points: this.getDefaultPoints()
      }, {
        name: 'Appearance',
        points: this.getDefaultPoints()
      }],
      priority: undefined,
      availablePoints: -1,
      minPoints: 1,
      freebieCost: 5
    },
    {
      name: 'Mental',
      values: [{name: 'Perception', points: this.getDefaultPoints()}, {
        name: 'Intelligence',
        points: this.getDefaultPoints()
      }, {
        name: 'Wits',
        points: this.getDefaultPoints()
      }],
      priority: undefined,
      availablePoints: -1,
      minPoints: 1,
      freebieCost: 5
    }
  ];

  getDefaultPoints(): Point[] {
    return [Point.Original, Point.None, Point.None, Point.None, Point.None];
  }

}
