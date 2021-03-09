import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FreebiesService} from '../freebies/freebies.service';
import {NamedPoints, NamedPointsGroup} from '../points.service';
import {PointsClickedEvent} from '../point-selection-group/point-selection-group.component';
import {DisciplineService} from './discipline.service';

@Component({
  selector: 'app-disciplines',
  template: `
    <div class="rows" *ngIf="disciplines">
      <div *ngFor="let attribute of disciplines.values; trackBy: npTrackFn ">
        <mat-form-field>
          <mat-label></mat-label>
          <mat-select [value]="attribute.name" [disabled]="!freebieService.freebieModeActive">
            <mat-option *ngFor="let discipline of disciplineService.disciplines" [value]="discipline">
              {{discipline}}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <app-point-selection [points]="attribute.points"
                             (pointsClicked)="pointsClicked({group:disciplines, value:attribute, amount: $event})"
        ></app-point-selection>
      </div>
    </div>
  `,
  styles: []
})
export class DisciplinesComponent {
  @Input()
  disciplines: NamedPointsGroup | undefined = undefined;

  @Output()
  disciplinesChanged = new EventEmitter<NamedPointsGroup>();

  constructor(public freebieService: FreebiesService, public disciplineService: DisciplineService) {
  }

  pointsClicked(event: PointsClickedEvent): void {
    const newGroup = this.disciplineService?.pointSelection(event.amount, event.group, event.value);
    if (newGroup !== null) {
      this.disciplinesChanged.emit(newGroup);
    }
  }

  npTrackFn(index: number, item: NamedPoints): string {
    return `${item.name}${item.points}`;
  }

}
