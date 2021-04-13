import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NamedPoints, NamedPointsGroup} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';
import {WillpowerService} from './willpower.service';
import {PointsClickedEvent} from '../point-selection-group/point-selection-group.component';

@Component({
  selector: 'app-willpower',
  template: `
    <h2 class="mat-h2">Willpower</h2>
    <app-point-selection [points]="willpower.values[0].points" [disabled]="!freebieService.freebieModeActive"
                         (pointsClicked)="pointsClicked({amount: $event, group: willpower, value: willpower.values[0]})"></app-point-selection>
  `,
  styles: []
})
export class WillpowerComponent implements OnChanges {
  willpower: NamedPointsGroup;
  @Input()
  savedVirtues: NamedPointsGroup | undefined = undefined;
  @Input()
  savedWillpower: NamedPoints | undefined = undefined;

  @Output() willpowerChanged = new EventEmitter<NamedPoints>();

  constructor(public willpowerService: WillpowerService, public freebieService: FreebiesService) {
    this.willpower = willpowerService.defaultGroups[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.willpower.values[0].points = this.willpowerService.mergePoints(this.savedWillpower, this.savedVirtues?.values[2]);
  }

  pointsClicked(event: PointsClickedEvent): void {
    const newGroup = this.willpowerService.pointSelection(event.amount, event.group, event.value);
    if (newGroup !== null) {
      this.willpowerChanged.emit(newGroup.values[0]);
    }
  }
}
