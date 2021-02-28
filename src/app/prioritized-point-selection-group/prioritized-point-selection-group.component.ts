import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NamedPoints} from '../point-selection-group/point-selection-group.component';

@Component({
  selector: 'app-prioritized-point-selection-group',
  template: `
    <div *ngFor="let group of groups" class="group">
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

      <app-point-selection-group [attributes]="group.values" [availablePoints]="getAvailablePoints(group)"
                                 (pointsChanged)="ptsChanged($event, group)"></app-point-selection-group>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: row;
    }

    .group {
      display: flex;
      flex-direction: column;
      padding: 4px;
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

  @Output()
  pointsChanged = new EventEmitter<NamedPointsGroup[]>();

  constructor() {
  }

  prioritySelectionChanged(priority: Priority, group: NamedPointsGroup) {
    this.groups.filter(value => value.priority === priority.name).forEach(value => value.priority = undefined);
    group.priority = priority.name;
    group.values?.forEach(value => value.points = 0);
  }

  ptsChanged(attribute: NamedPoints, group: NamedPointsGroup) {
    let value = group.values.find(value => value.name === attribute.name);
    if (value !== undefined) {
      value.points = attribute.points;
    }
    this.pointsChanged.emit(this.groups);
  }

  groupPriority(group: NamedPointsGroup): Priority | undefined {
    return this.priorities.find(value => value.name == group.priority);
  }

  getAvailablePoints(group: NamedPointsGroup): number {
    let priority = this.groupPriority(group);
    if (priority !== undefined) {
      let sum = group.values.map(value => value.points).reduce((previousValue, currentValue) => previousValue + currentValue);

      return priority.availablePoints - sum;
    }
    return 0;
  }
}

export interface NamedPointsGroup {
  name: string;
  values: NamedPoints[],
  priority?: string | undefined
}

export interface Priority {
  name: string;
  availablePoints: number;
}
