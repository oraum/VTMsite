import {Injectable} from '@angular/core';
import {NamedPointsGroup, Point, PointsService, Priority} from '../points.service';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService extends PointsService {
  priorities: Priority[] = [{name: 'Primary', availablePoints: 13}, {name: 'Secondary', availablePoints: 9}, {
    name: 'Tertiary',
    availablePoints: 5
  }];

  defaultGroups: NamedPointsGroup[] = [
    {
      name: 'Talents',
      values: [{name: 'Alertness', points: this.getDefaultPoints()}, {
        name: 'Athletics',
        points: this.getDefaultPoints()
      }, {name: 'Awareness', points: this.getDefaultPoints()}, {
        name: 'Brawl',
        points: this.getDefaultPoints()
      }, {name: 'Empathy', points: this.getDefaultPoints()}, {name: 'Expression', points: this.getDefaultPoints()}, {
        name: 'Intimidation',
        points: this.getDefaultPoints()
      }, {
        name: 'Leadership',
        points: this.getDefaultPoints()
      }, {name: 'Streetwise', points: this.getDefaultPoints()}, {name: 'Subterfuge', points: this.getDefaultPoints()},
        {name: 'talents-freetext', points: this.getDefaultPoints(), type: 'freetext'}],
      priority: undefined,
      availablePoints: -1,
    },
    {
      name: 'Skills',
      values: [{name: 'Animal Ken', points: this.getDefaultPoints()}, {name: 'Crafts', points: this.getDefaultPoints()}, {
        name: 'Drive',
        points: this.getDefaultPoints()
      }, {
        name: 'Etiquette',
        points: this.getDefaultPoints()
      }, {name: 'Firearms', points: this.getDefaultPoints()}, {name: 'Larceny', points: this.getDefaultPoints()}, {
        name: 'Melee',
        points: this.getDefaultPoints()
      }, {
        name: 'Performance',
        points: this.getDefaultPoints()
      }, {name: 'Stealth', points: this.getDefaultPoints()}, {name: 'Survival', points: this.getDefaultPoints()},
        {name: 'skills-freetext', points: this.getDefaultPoints(), type: 'freetext'}],
      priority: undefined,
      availablePoints: -1,
    },
    {
      name: 'Knowledge',
      values: [{name: 'Academics', points: this.getDefaultPoints()}, {name: 'Computer', points: this.getDefaultPoints()}, {
        name: 'Finance',
        points: this.getDefaultPoints()
      }, {
        name: 'Investigation',
        points: this.getDefaultPoints()
      }, {name: 'Law', points: this.getDefaultPoints()}, {name: 'Medicine', points: this.getDefaultPoints()}, {
        name: 'Occult',
        points: this.getDefaultPoints()
      }, {
        name: 'Politics',
        points: this.getDefaultPoints()
      }, {name: 'Science', points: this.getDefaultPoints()}, {name: 'Technology', points: this.getDefaultPoints()}, {
        name: 'knowledge-freetext',
        points: this.getDefaultPoints(),
        type: 'freetext'
      }],
      priority: undefined,
      availablePoints: -1,
    },
  ];

  getDefaultPoints(): Point[] {
    return [Point.None, Point.None, Point.None, Point.None, Point.None];
  }

}
