import {Injectable} from '@angular/core';
import {NamedPointsGroup, Priority} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';
import {PointsService} from '../points.service';

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
      values: [{name: 'Alertness', points: 0}, {name: 'Athletics', points: 0}, {name: 'Awareness', points: 0}, {
        name: 'Brawl',
        points: 0
      }, {name: 'Empathy', points: 0}, {name: 'Expression', points: 0}, {name: 'Intimidation', points: 0}, {
        name: 'Leadership',
        points: 0
      }, {name: 'Streetwise', points: 0}, {name: 'Subterfuge', points: 0}],
      priority: undefined
    },
    {
      name: 'Skills',
      values: [{name: 'Animal Ken', points: 0}, {name: 'Crafts', points: 0}, {name: 'Drive', points: 0}, {
        name: 'Etiquette',
        points: 0
      }, {name: 'Firearms', points: 0}, {name: 'Larceny', points: 0}, {name: 'Melee', points: 0}, {
        name: 'Performance',
        points: 0
      }, {name: 'Stealth', points: 0}, {name: 'Survival', points: 0}],
      priority: undefined
    },
    {
      name: 'Knowledge',
      values: [{name: 'Academics', points: 0}, {name: 'Computer', points: 0}, {name: 'Finance', points: 0}, {
        name: 'Investigation',
        points: 0
      }, {name: 'Law', points: 0}, {name: 'Medicine', points: 0}, {name: 'Occult', points: 0}, {
        name: 'Politics',
        points: 0
      }, {name: 'Science', points: 0}, {name: 'Technology', points: 0}],
      priority: undefined
    },
  ];

}
