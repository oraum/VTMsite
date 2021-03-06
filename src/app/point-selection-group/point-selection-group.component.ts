import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NamedPoints, NamedPointsGroup} from '../points.service';

@Component({
  selector: 'app-point-selection-group',
  template: `
    <div class="rows" *ngIf="group">
      <div *ngFor="let attribute of group.values; trackBy: npTrackFn ">
        <span class="attribute-name">{{attribute.name}}</span>
        <!--<app-point-selection [minPoints]="getMinPoints(attribute)" [maxPoints]="group.maxPoints"
                             [availablePoints]="group.availablePoints" [pointsGiven]="attribute.points"
        ></app-point-selection>-->
      </div>
    </div>
  `,
  styles: [`
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
export class PointSelectionGroupComponent {
  @Input() group: NamedPointsGroup | undefined;

  @Output() pointsChanged = new EventEmitter<NamedPoints>();

  constructor() {
  }


  ptsChanged(attribute: NamedPoints, points: number): void {
    const oldPoints = attribute.points;
    // attribute.points = points;
    // this.availablePoints += (oldPoints - points);
    this.pointsChanged.emit(attribute);
  }

  npTrackFn(index: number, item: NamedPoints): string {
    return `${item.name}${item.points}`;
  }

  getMinPoints(attribute: NamedPoints): number {
    return attribute.minPoints ?? this.group?.minPoints ?? 0;
  }
}



