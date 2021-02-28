import {Injectable} from '@angular/core';
import {NamedPointsGroup, Priority} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';
import {PointsService} from '../points.service';

@Injectable({
  providedIn: 'root'
})
export class AttributesService extends PointsService {
  priorities: Priority[] = [
    {name: 'Primary', availablePoints: 7},
    {name: 'Secondary', availablePoints: 5},
    {name: 'Tertiary', availablePoints: 3}];
  defaultGroups: NamedPointsGroup[] = [
    {
      name: 'Physical',
      values: [{name: 'Strength', points: 0}, {name: 'Dexterity', points: 0}, {name: 'Stamina', points: 0}],
      priority: undefined
    },
    {
      name: 'Social',
      values: [{name: 'Charisma', points: 0}, {name: 'Manipulation', points: 0}, {name: 'Appearance', points: 0}],
      priority: undefined
    },
    {
      name: 'Mental',
      values: [{name: 'Perception', points: 0}, {name: 'Intelligence', points: 0}, {name: 'Wits', points: 0}],
      priority: undefined
    }
  ];

}