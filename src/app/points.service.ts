import {NamedPointsGroup, Priority} from './prioritized-point-selection-group/prioritized-point-selection-group.component';
import {NamedPoints, Point} from './point-selection-group/point-selection-group.component';

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

  static pointsToNumber(points: Point[]): number {
    return points.reduce<number>((previousValue, currentValue) => {
      if (currentValue === Point.None) {
        return previousValue;
      } else {
        return previousValue + 1;
      }
    }, 0);
  }

  abstract getDefaultPoints(): Point[];

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
        group.availablePoints = savedGroup.availablePoints;
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

  prioritySelectionChanged(priority: Priority, group: NamedPointsGroup, grps: NamedPointsGroup[]): NamedPointsGroup[] {
    const groups = [...grps];
    groups.filter(value => value.priority === priority.name).forEach(value => {
      value.priority = undefined;
      value.availablePoints = -1;
    });
    group.priority = priority.name;
    group.availablePoints = priority.availablePoints;
    group.values?.forEach(value => {
      value.points = this.getDefaultPoints();
    });
    return groups;
  }

  ptsChanged(attribute: NamedPoints, group: NamedPointsGroup): void {
    const value = group.values.find(val => val.name === attribute.name);
    if (value !== undefined) {
      console.log(attribute);
      // const diff = (value.points-this.basePoints) - attribute.points;
      // value.points = attribute.points;
      // group.availablePoints += diff;
    }
    // this.pointsChanged.emit(this.groups);
  }

  pointSelection(points: number, group: NamedPointsGroup, value: NamedPoints): NamedPointsGroup | null {
    const availablePoints = group.availablePoints;
    const grpPoints = PointsService.pointsToNumber(value.points);
    const diff = points - grpPoints;
    if (diff > 0) {
      // increase
      if (diff <= availablePoints) {
        value.points = value.points.map((pt, index) => {
          if (index < points && pt === Point.None) {
            return Point.Original;
          } else {
            return pt;
          }
        });
      } else {
        // tried to spend more points than available - aborting
        return null;
      }
    } else {
      // decrease
      if (points >= (group.minPoints ?? 0)) {
        if (points === grpPoints && points === 1) {
          // special case to deselect the only point given
          value.points = this.getDefaultPoints();
        } else {
          value.points = value.points.map((pt, index) => {
            if (index < points) {
              return pt;
            } else {
              return Point.None;
            }
          });
        }
      } else {
        // tried to set less than base points which should not be possible, use basePoints instead
        return null;
      }
    }

    group.availablePoints -= diff;
    return group;
  }
}
