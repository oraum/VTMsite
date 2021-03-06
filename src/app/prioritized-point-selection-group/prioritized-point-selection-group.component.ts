import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NamedPoints} from '../point-selection-group/point-selection-group.component';

@Component({
  selector: 'app-prioritized-point-selection-group',
  template: `
    <div *ngFor="let group of groups; trackBy:groupTrackFn" class="group">
      <div class="title">
        <span>{{group.name}}</span>
        <span *ngIf="group.availablePoints>=0">{{group.availablePoints}}</span>
      </div>

      <app-priority-selection [priorities]="priorities" [selectedPriority]="groupPriority(group)"
                              (priorityChanged)="priorityChanged.emit({priority: $event,group: group})"></app-priority-selection>

      <div class="rows" *ngIf="group">
        <div *ngFor="let attribute of group.values; trackBy: npTrackFn ">
          <span class="attribute-name">{{attribute.name}}</span>
          <app-point-selection [points]="attribute.points"
                               (pointsClicked)="pointsClicked.emit({group:group, value:attribute, amount: $event})"
          ></app-point-selection>
        </div>
      </div>
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

    .attribute-name {
      flex-grow: 1;
    }

    .rows {
      display: flex;
      flex-direction: column;
    }

    .rows > * {
      display: flex;
      flex-grow: 1;
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

  @Output() pointsClicked = new EventEmitter<PointsClickedEvent>();

  @Output() priorityChanged = new EventEmitter<PriorityChangedEvent>();

  constructor() {
  }


  groupPriority(group: NamedPointsGroup): Priority | undefined {
    return this.priorities.find(value => value.name === group.priority);
  }

  groupTrackFn(index: number, item: NamedPointsGroup): string {
    return `${item.name}`;
  }

  npTrackFn(index: number, item: NamedPoints): string {
    return `${item.name}${item.points}`;
  }
}

export interface PriorityChangedEvent {
  priority: Priority;
  group: NamedPointsGroup;
}

export interface PointsClickedEvent {
  group: NamedPointsGroup;
  value: NamedPoints;
  amount: number;
}

export interface NamedPointsGroup {
  name: string;
  values: NamedPoints[];
  priority?: string | undefined;
  availablePoints: number;
  minPoints?: number;
  freebieCost?: number;
}

export interface Priority {
  name: string;
  availablePoints: number;
}
