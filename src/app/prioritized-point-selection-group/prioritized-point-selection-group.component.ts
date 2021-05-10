import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NamedPointsGroup, PointsService, Priority} from '../points.service';
import {FreeTextChangedEvent, PointsClickedEvent} from '../point-selection-group/point-selection-group.component';

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

      <app-point-selection-group [group]="group" (pointsClicked)="pointsClicked($event)"
                                 (freeTextChanged)="changeFreeText($event)"></app-point-selection-group>
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
      flex-basis: 220px;
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
    return `${item.name}-${item.availablePoints}`;
  }

  changeFreeText(event: FreeTextChangedEvent): void {
    const group = this.groups.find(value => value.name === event.group.name);
    if (group !== undefined) {
      const namedPoint = group.values.find(value => value.name === event.name);
      if (namedPoint !== undefined) {
        namedPoint.value = event.value;
        this.attributesChanged.emit(this.groups);
      }
    }
  }
}

export interface PriorityChangedEvent {
  priority: Priority;
  group: NamedPointsGroup;
}

