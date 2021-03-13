import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NamedPoints, NamedPointsGroup, Point} from '../points.service';
import {PathService} from '../path/path.service';
import {FreebiesService} from '../freebies/freebies.service';

@Component({
  selector: 'app-willpower',
  template: `
    <h2 class="mat-h2">Willpower</h2>
    <app-point-selection [points]="willpower.points" [disabled]="!freebieService.freebieModeActive"></app-point-selection>
  `,
  styles: []
})
export class WillpowerComponent implements OnChanges {
  willpower: NamedPoints;
  @Input()
  savedVirtues: NamedPointsGroup | undefined = undefined;
  @Input()
  savedWillpower: NamedPoints | undefined = undefined;

  @Output() willpowerChanged = new EventEmitter<NamedPoints>();

  constructor(public freebieService: FreebiesService) {
    this.willpower = {
      name: 'willpower',
      points: [Point.Original, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None, Point.None]
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('savedVirtues' in changes && changes.savedVirtues.currentValue !== undefined) {
      const points = [...changes.savedVirtues.currentValue.values[2].points,
        ...this.willpower.points.filter((p: Point) => (p !== Point.Original))];
      this.willpower.points = points.sort(PathService.pointSortFn).slice(0, 10);
    }
    if ('savedWillpower' in changes && changes.savedWillpower.currentValue !== undefined) {
      this.willpower = changes.savedWillpower.currentValue;
    }
  }
}
