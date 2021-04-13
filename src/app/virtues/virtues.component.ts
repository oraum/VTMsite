import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NamedPointsGroup, Point} from '../points.service';
import {VirtuesService} from './virtues.service';
import {PointsClickedEvent} from '../point-selection-group/point-selection-group.component';

@Component({
  selector: 'app-virtues',
  template: `
    <h2 class="mat-h2">Virtues</h2>
    <span>{{virtues.availablePoints}}</span>
    <ng-container *ngFor="let virtue of virtues.values">
      <div>
        <span>{{virtue.name}}</span>
        <app-point-selection [points]="virtue.points"
                             (pointsClicked)="pointsClicked({amount: $event, group: virtues, value: virtue})"></app-point-selection>
      </div>
    </ng-container>
  `,
  styles: [`
    div {
      display: flex;
      align-items: center
    }

    div > span {
      flex-grow: 1;
    }
  `]
})
export class VirtuesComponent implements OnChanges {
  virtues: NamedPointsGroup;
  @Output() virtuesChanged = new EventEmitter<NamedPointsGroup>();

  @Input()
  savedVirtues: NamedPointsGroup | undefined = undefined;

  constructor(public virtuesService: VirtuesService) {
    this.virtues = virtuesService.defaultGroups[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedVirtues) {
      this.virtues = this.virtuesService.getGroups([this.savedVirtues])[0];
    }
  }

  pointsClicked(event: PointsClickedEvent): void {
    const newGroup = this.virtuesService.pointSelection(event.amount, event.group, event.value);
    if (newGroup !== null) {
      this.virtuesChanged.emit(newGroup);
    }
  }
}
