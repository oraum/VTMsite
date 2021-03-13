import {Component, Input, OnChanges, EventEmitter, Output, SimpleChanges} from '@angular/core';
import {NamedPoints, NamedPointsGroup} from '../points.service';
import {PathService} from './path.service';
import {FreebiesService} from '../freebies/freebies.service';

@Component({
  selector: 'app-path',
  template: `
    <h2 class="mat-h2">Humanity/Path</h2>
    <div>
      <mat-form-field class="grow">
        <mat-select [value]="path.value" (valueChange)="pathSelectionChanged($event)">
          <mat-option *ngFor="let background of pathService.pathList" [value]="background">
            {{background}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <app-point-selection [points]="path.points" [disabled]="!freebieService.freebieModeActive"></app-point-selection>
  `,
  styles: [`
    div {
      display: flex;
      align-items: center
    }

    .grow {
      flex-grow: 1;
    }`]
})
export class PathComponent implements OnChanges {
  path: NamedPoints;
  @Input()
  savedVirtues: NamedPointsGroup | undefined = undefined;
  @Input()
  savedPath: NamedPoints | undefined = undefined;

  @Output() pathChanged = new EventEmitter<NamedPoints>();

  constructor(public pathService: PathService, public freebieService: FreebiesService) {
    this.path = pathService.defaultPoints;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('savedVirtues' in changes && changes.savedVirtues.currentValue !== undefined) {
      this.path = this.pathService.getPoints(changes.savedVirtues.currentValue, this.path);
    }
    if ('savedPath' in changes && changes.savedPath.currentValue !== undefined) {
      this.path = changes.savedPath.currentValue;
    }
  }


  pathSelectionChanged(path: string): void {
    this.path.value = path;
    this.pathChanged.emit(this.path);
  }
}
