import {Injectable} from '@angular/core';
import {NamedPointsGroup, Priority} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {
  priorities: Priority[] = [{name: 'Primary', availablePoints: 7}, {name: 'Secondary', availablePoints: 5}, {
    name: 'Tertiary',
    availablePoints: 3
  }];
  defaultAttributeGroups: NamedPointsGroup[] = [
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

  constructor() {
  }

  getAttributeGroups(savedAttributes: NamedPointsGroup[]): NamedPointsGroup[] {
    let attributeGroups: NamedPointsGroup[] = JSON.parse(JSON.stringify(this.defaultAttributeGroups)); // deep copy

    savedAttributes.forEach((savedGroup) => {
      let group = attributeGroups.find(npg => npg.name === savedGroup.name);
      if (group !== undefined) {
        group.priority = savedGroup.priority;
        savedGroup?.values.forEach(value => {
          let val = group?.values.find(value1 => value1.name === value.name);
          if (val !== undefined) {
            val.points = value.points;
          }
        });

      }
    });
    return attributeGroups;
  }
}
