import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Point} from '../point-selection-group/point-selection-group.component';

/**
 * Component to give points to a value
 */
@Component({
  selector: 'app-point-selection',
  template: `
    <button mat-icon-button *ngFor="let point of points;index as i" (click)="onClick(i+1); $event.stopPropagation()">
      <mat-icon>
        {{showIcon(point)}}
      </mat-icon>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointSelectionComponent {

  /**
   * number of points spent on this value
   */
  @Input() points: Point[] = [];

  /**
   * Event with updated value of points spent on value
   */
  @Output() pointsClicked = new EventEmitter<number>();


  showIcon(point: Point): string {
    if (point === Point.Original || point === Point.Freebie) {
      return 'radio_button_checked';
    } else {
      return 'radio_button_unchecked';
    }
  }

  onClick(points: number): void {
    // publish new points
    this.pointsClicked.emit(points);
  }

}
