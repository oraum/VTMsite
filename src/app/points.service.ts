import {NamedPointsGroup, Priority} from './prioritized-point-selection-group/prioritized-point-selection-group.component';

/**
 * abstract service providing priorities and groups for {@see PrioritizedPointSelectionGroupComponent} and default implementation to merge
 * saved values with default ones
 */
export abstract class PointsService {
  /**
   * priorities to select from
   */
  abstract priorities: Priority[];
  /**
   * default groups
   */
  abstract defaultGroups: NamedPointsGroup[];

  constructor() {
  }

  /**
   * merge default groups({@see defaultGroups}) with given saved group data
   * @param savedGroups saved data from store
   */
  getGroups(savedGroups: NamedPointsGroup[]): NamedPointsGroup[] {
    const groups: NamedPointsGroup[] = JSON.parse(JSON.stringify(this.defaultGroups)); // deep copy

    savedGroups.forEach((savedGroup) => {
      const group = groups.find(npg => npg.name === savedGroup.name);
      if (group !== undefined) {
        group.priority = savedGroup.priority;
        savedGroup?.values.forEach(value => {
          const val = group?.values.find(value1 => value1.name === value.name);
          if (val !== undefined) {
            val.points = value.points;
          }
        });

      }
    });
    return groups;
  }
}
