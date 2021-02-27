import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-point-selection-group',
  template: `
    <div class="rows">
      <div *ngFor="let attribute of attributes">
        <span class="attribute-name">{{attribute.name}}</span>
        <app-point-selection [basePoints]="1" [maxPoints]="5" [availablePoints]="availablePoints" [pointsGiven]="attribute.points"
                             (pointsChanged)="ptsChanged(attribute,$event)"></app-point-selection>
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
  `]
})
export class PointSelectionGroupComponent {
  @Input() attributes: NamedPoints[] | undefined;

  @Input() availablePoints = -1;

  @Output() pointsChanged = new EventEmitter<NamedPoints>();

  constructor() {
  }


  ptsChanged(attribute: NamedPoints, points: number) {
    let oldPoints = attribute.points;
    attribute.points = points;
    this.availablePoints += (oldPoints - points);
    this.pointsChanged.emit(attribute);
  }

}


export interface NamedPoints {
  name: string;
  points: number
}
