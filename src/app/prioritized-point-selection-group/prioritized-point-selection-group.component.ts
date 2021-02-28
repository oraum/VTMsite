import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NamedPoints} from '../point-selection-group/point-selection-group.component';

@Component({
  selector: 'app-prioritized-point-selection-group',
  template: `
    <div *ngFor="let group of groups; trackBy:groupTrackFn" class="group">
      <div class="title">
        <span>{{group.name}}</span>
        <span *ngIf="getAvailablePoints(group)>=0">{{getAvailablePoints(group)}}</span>
      </div>

      <mat-form-field>
        <mat-label></mat-label>
        <mat-select (valueChange)="prioritySelectionChanged($event, group)"
                    [value]="groupPriority(group)" placeholder="Priority">
          <mat-option *ngFor="let priority of priorities" [value]="priority">
            {{priority.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <app-point-selection-group [attributes]="group.values" [availablePoints]="getAvailablePoints(group)" [basePoints]="basePoints"
                                 (pointsChanged)="ptsChanged($event, group)"></app-point-selection-group>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .group {
      display: flex;
      flex-direction: column;
      padding: 4px;
      flex-grow: 1;
      margin-bottom: 32px;
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrioritizedPointSelectionGroupComponent {
  @Input()
  groups: NamedPointsGroup[] = [];

  @Input()
  priorities: Priority[] = [];

  @Input() basePoints = 0;

  @Output()
  pointsChanged = new EventEmitter<NamedPointsGroup[]>();

  constructor() {
  }

  prioritySelectionChanged(priority: Priority, group: NamedPointsGroup): void {
    this.groups.filter(value => value.priority === priority.name).forEach(value => value.priority = undefined);
    group.priority = priority.name;
    group.values?.forEach(value => value.points = 0);
  }

  ptsChanged(attribute: NamedPoints, group: NamedPointsGroup): void {
    const value = group.values.find(val => val.name === attribute.name);
    if (value !== undefined) {
      value.points = attribute.points;
    }
    this.pointsChanged.emit(this.groups);
  }

  groupPriority(group: NamedPointsGroup): Priority | undefined {
    return this.priorities.find(value => value.name === group.priority);
  }

  getAvailablePoints(group: NamedPointsGroup): number {
    const priority = this.groupPriority(group);
    if (priority !== undefined) {
      const sum = group.values.map(value => value.points).reduce((previousValue, currentValue) => previousValue + currentValue);

      return priority.availablePoints - sum;
    }
    return 0;
  }

  groupTrackFn(index: number, item: NamedPointsGroup): string {
    return `${item.name}`;
  }
}

export interface NamedPointsGroup {
  name: string;
  values: NamedPoints[];
  priority?: string | undefined;
}

export interface Priority {
  name: string;
  availablePoints: number;
}
