import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NamedPoints, NamedPointsGroup, PointsService} from '../points.service';
import {BackgroundsService} from './backgrounds.service';
import {PointsClickedEvent} from '../point-selection-group/point-selection-group.component';
import {MatSelect} from '@angular/material/select';
import {animate, style, transition, trigger} from '@angular/animations';
import {FreebiesService} from '../freebies/freebies.service';

@Component({
  selector: 'app-backgrounds',
  template: `
    <div>
      <div class="title">
        <h2 class="mat-h2">Backgrounds</h2>
        <span>{{backgrounds.availablePoints}}</span>
      </div>
      <div @InsertRemoveTrigger *ngFor="let x of backgrounds.values">
        <mat-form-field appearance="standard">
          <mat-select [value]="x.value" (valueChange)="selectionChange(x, $event, select)" #select>
            <mat-option *ngFor="let background of backgroundsService.backgroundList" [value]="background">
              {{background}}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <app-point-selection [points]="x.points" (pointsClicked)="pointsClicked({amount: $event, group: backgrounds, value: x})"
        ></app-point-selection>
      </div>
      <div *ngIf="freebieService.freebieModeActive">
        <button mat-button (click)="addBackground()">Add Background</button>
      </div>
    </div>
  `,
  animations: [
    trigger('InsertRemoveTrigger', [
      transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0, height: 0}),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({transform: 'scale(1)', opacity: 1, height: '*'}))  // final
      ]),
      transition(':leave', [
        style({transform: 'scale(1)', opacity: 1, height: '*'}),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ]),
  ],
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

  constructor(public backgroundsService: BackgroundsService, public freebieService: FreebiesService) {
    this.backgrounds = backgroundsService.defaultGroups[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedBackgrounds) {
      this.backgrounds = this.savedBackgrounds;
    }
  }

  pointsClicked(event: PointsClickedEvent): void {
    if (event.value.value !== undefined) {
      const newGroup = this.backgroundsService?.pointSelection(event.amount, event.group, event.value);
      if (newGroup !== null) {
        this.backgroundsChanged.emit(newGroup);
      }
    }
  }

  selectionChange(np: NamedPoints, event: string, select: MatSelect): void {
    if (this.backgrounds.values.map(value => value.value).includes(event)) {
      select.writeValue(np.value);
      return;
    }
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

  addBackground(): void {
    if (this.backgrounds.values.filter(value => value.value === undefined).length === 0) {
      this.backgrounds.values.push({name: 'b' + this.backgrounds.values.length, points: this.backgroundsService.getDefaultPoints()});
    }
  }
}
