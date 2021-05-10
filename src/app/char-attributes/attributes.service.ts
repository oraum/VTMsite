import {Injectable} from '@angular/core';
import {NamedPoints, NamedPointsGroup, Point, PointsService, Priority} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';
import {Observable, Subject} from 'rxjs';

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
  #appearanceFlaws: Set<string> = new Set();

  constructor(freebieService: FreebiesService) {
    super(freebieService);
  }

  #_childFlaw = false;

  get childFlaw(): boolean {
    return this.#_childFlaw;
  }

  set childFlaw(value: boolean) {
    this.#_childFlaw = value;
    this.#_flawChangeEvent.next();
  }

  #_flawChangeEvent = new Subject<void>();

  get flawChangeEvent(): Observable<void> {
    return this.#_flawChangeEvent;
  }

  get appearanceFlaws(): Set<string> {
    this.#_flawChangeEvent.next();
    return this.#appearanceFlaws;
  }

  getDefaultPoints(): Point[] {
    return [Point.Original, Point.None, Point.None, Point.None, Point.None];
  }

  prioritySelectionChanged(priority: Priority, group: NamedPointsGroup, grps: NamedPointsGroup[]): NamedPointsGroup[] {
    const groups = [...grps];
    groups.filter(value => value.priority === priority.name).forEach(value => {
      value.priority = undefined;
      value.availablePoints = -1;
    });
    group.priority = priority.name;
    group.availablePoints = priority.availablePoints;
    group.values?.filter(value => value.editable !== false).forEach(value => {
      value.points = this.getDefaultPoints();
    });
    return groups;
  }

  pointSelection(points: number, group: NamedPointsGroup, value: NamedPoints): NamedPointsGroup | null {
    console.log('%o %o %o', points, group, value);
    if (this.#_childFlaw && (value.name === 'Strength' || value.name === 'Stamina')) {
      // cap values
      if (points > 2) {
        points = 2;
      }
    } else if (value.name === 'Appearance' && this.#appearanceFlaws.size > 0) {
      if (this.#appearanceFlaws.has('Permanent Fangs (3pt)')) {
        if (points > 3) {
          points = 3;
        }
      }
      if (this.#appearanceFlaws.has('Disfigured (2pt)')) {
        if (points > 2) {
          points = 2;
        }
      }
      if (this.#appearanceFlaws.has('Monstrous (3pt)')) {
        points = 0;
      }
    }
    return super.pointSelection(points, group, value);
  }

  checkFlaws(groups: NamedPointsGroup[]): NamedPointsGroup[] {
    if (this.#_childFlaw) {
      groups[0].values.filter(value => (value.name === 'Strength' || value.name === 'Stamina')).forEach(value => {
        if (PointsService.pointsToNumber(value.points) > 2) {
          this.reducePoints(2, groups[0], value);
        }
      });
    }
    if (this.#appearanceFlaws.size > 0) {
      groups[1].values.filter(value => (value.name === 'Appearance')).forEach(value => {
        const points = PointsService.pointsToNumber(value.points);
        let newPoints = points;
        if (this.#appearanceFlaws.has('Permanent Fangs (3pt)')) {
          if (points > 3) {
            newPoints = 3;
          }
        }
        if (this.#appearanceFlaws.has('Disfigured (2pt)')) {
          if (points > 2) {
            newPoints = 2;
          }
        }
        if (this.#appearanceFlaws.has('Monstrous (3pt)')) {
          newPoints = 0;
        }
        if (newPoints !== points) {
          this.reducePoints(newPoints, groups[1], value);
        }
      });
    }
    return groups;
  }

  /**
   * similar to {@see pointSelection} but will only reduce points and refund no matter if original or freebie
   * @param points Amount of point the value should have
   * @param group the group
   * @param value the value
   */
  reducePoints(points: number, group: NamedPointsGroup, value: NamedPoints): void {
    value.points = value.points.map((point, index) => {
      if (index < points) {
        return point;
      } else {
        if (point === Point.Original) {
          group.availablePoints += 1;
        } else if (point === Point.Freebie) {
          this.freebieService.points += group.freebieCost ?? 1;
        }
        return Point.None;
      }
    });
  }
}
