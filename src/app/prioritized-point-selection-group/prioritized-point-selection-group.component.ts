import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NamedPoints, NamedPointsGroup, PointsService, Priority} from '../points.service';

@Component({
  selector: 'app-prioritized-point-selection-group',
  template: `
    <div *ngFor="let group of groups; trackBy:groupTrackFn" class="group">
      <div class="title">
        <span>{{group.name}}</span>
        <span *ngIf="group.availablePoints>=0">{{group.availablePoints}}</span>
      </div>

      <app-priority-selection [priorities]="priorities" [selectedPriority]="groupPriority(group)"
                              (priorityChanged)="priorityChanged({priority: $event,group: group})"></app-priority-selection>

      <div class="rows" *ngIf="group">
        <div *ngFor="let attribute of group.values; trackBy: npTrackFn ">
          <span class="attribute-name">{{attribute.name}}</span>
          <app-point-selection [points]="attribute.points"
                               (pointsClicked)="pointsClicked({group:group, value:attribute, amount: $event})"
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

  @Input()
  service: PointsService | undefined = undefined;

  @Output()
  attributesChanged = new EventEmitter<NamedPointsGroup[]>();

  constructor() {
  }


  priorityChanged(event: PriorityChangedEvent): void {
    const newGroups = this.service?.prioritySelectionChanged(event.priority, event.group, this.groups);
    this.attributesChanged.emit(newGroups);
  }

  pointsClicked(event: PointsClickedEvent): void {
    const newGroups = this.service?.pointSelection(event.amount, event.group, event.value);
    if (newGroups !== null) {
      this.attributesChanged.emit(this.groups);
    }
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
