import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NamedPoints, NamedPointsGroup, PointsService} from '../points.service';
import {BackgroundsService} from './backgrounds.service';
import {PointsClickedEvent} from '../point-selection-group/point-selection-group.component';

@Component({
  selector: 'app-backgrounds',
  template: `
    <div class="title">
      <h2 class="mat-h2">Backgrounds</h2>
      <span>{{backgrounds.availablePoints}}</span>
    </div>
    <div *ngFor="let x of backgrounds.values">
      <mat-form-field appearance="standard">
        <mat-select [value]="x.value" (valueChange)="selectionChange(x, $event)">
          <mat-option *ngFor="let background of backgroundsService.backgroundList" [value]="background">
            {{background}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <app-point-selection [points]="x.points" (pointsClicked)="pointsClicked({amount: $event, group: backgrounds, value: x})"
      ></app-point-selection>
    </div>
  `,
  styles: [`
    .mat-h2 {
      flex-grow: 1;
    }

    .title {
      display: flex;
      flex-grow: 1;
      align-items: center;
    }

    mat-form-field ::ng-deep .mat-form-field-infix {
      border: none;
    }

    mat-form-field ::ng-deep .mat-form-field-flex {
      padding: 0;
    }

    app-point-selection {
      margin-left: 8px;
    }
  `],
})
export class BackgroundsComponent implements OnChanges {
  @Input()
  savedBackgrounds: NamedPointsGroup | undefined = undefined;

  @Output()
  backgroundsChanged = new EventEmitter<NamedPointsGroup>();

  backgrounds: NamedPointsGroup;

  constructor(public backgroundsService: BackgroundsService) {
    this.backgrounds = backgroundsService.defaultGroups[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedBackgrounds) {
      this.backgrounds = this.savedBackgrounds;
    }
  }

  pointsClicked(event: PointsClickedEvent): void {
    const newGroup = this.backgroundsService?.pointSelection(event.amount, event.group, event.value);
    if (newGroup !== null) {
      this.backgroundsChanged.emit(newGroup);
    }
  }

  selectionChange(np: NamedPoints, event: string): void {
    if (np.value === undefined) {
      this.backgrounds.values.push({name: 'b' + this.backgrounds.values.length, points: this.backgroundsService.getDefaultPoints()});
    } else if (event === '') {
      this.backgrounds.availablePoints += PointsService.pointsToNumber(np.points);
      this.backgrounds.values = this.backgrounds.values.filter(value => value.name !== np.name).map((value, index) => {
        value.name = `b${index}`;
        return value;
      });
    }
    np.value = event;
    this.backgroundsChanged.emit(this.backgrounds);
  }
}
