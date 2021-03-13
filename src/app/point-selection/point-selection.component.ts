import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Point} from '../points.service';

/**
 * Component to give points to a value
 */
@Component({
  selector: 'app-point-selection',
  template: `
    <button mat-icon-button *ngFor="let point of points;index as i" (click)="onClick(i+1); $event.stopPropagation()" class="narrow-icon"
            [disabled]="disabled" disableRipple="true">
      <mat-icon>
        {{showIcon(point)}}
      </mat-icon>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .narrow-icon {
      width: 24px;
      height: 36px;
      line-height: 36px;
    }
  `]
})
export class PointSelectionComponent {

  /**
   * number of points spent on this value
   */
  @Input() points: Point[] = [];

  @Input() disabled = false;

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
