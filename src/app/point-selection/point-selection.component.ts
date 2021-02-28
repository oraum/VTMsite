import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

/**
 * Component to give points to a value
 */
@Component({
  selector: 'app-point-selection',
  template: `
    <button mat-icon-button *ngFor="let i of pointArray" (click)="onClick(i+1); $event.stopPropagation()">
      <mat-icon>
        {{showIcon(i)}}
      </mat-icon>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointSelectionComponent implements OnInit, OnChanges {

  /**
   * points always given to the value without spending additional points
   */
  @Input() basePoints: number = 0;
  /**
   * maximum number of points the value can have (incl. basePoints)
   */
  @Input() maxPoints: number = 5;
  /**
   * number of points which can be spent
   */
  @Input() availablePoints: number = 0;
  /**
   * number of points spent on this value
   */
  @Input() pointsGiven: number = 0;
  public pointArray: number[] = [];
  public points: number = 0;

  /**
   * Event with updated value of points spent on value
   */
  @Output() pointsChanged = new EventEmitter<number>();

  ngOnInit() {
    for (let index = 0; index < this.maxPoints; index++) {
      this.pointArray.push(index);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('pointsGiven' in changes) {
      this.points = this.pointsGiven + this.basePoints;
    }
  }

  showIcon(index: number) {
    if (this.points >= index + 1) {
      return 'radio_button_checked';
    } else {
      return 'radio_button_unchecked';
    }
  }

  onClick(points: number) {
    if (points > this.points) {
      //increase
      if (points - this.points <= this.availablePoints) {
        this.points = points;
      } else {
        // tried to spend more points than available - aborting
        return;
      }
    } else {
      //decrease
      if (points > this.basePoints) {
        if (points === this.points && points === 1) {
          // special case to deselect the only point given
          this.points = this.basePoints;
        }
        this.points = points;
      } else {
        // tried to set less than base points which should not be possible, use basePoints instead
        this.points = this.basePoints;
      }
    }
    // publish new points
    this.pointsChanged.emit(this.points - this.basePoints);
  }

}
