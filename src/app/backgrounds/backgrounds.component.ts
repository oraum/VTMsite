import {Component} from '@angular/core';
import {Point} from '../points.service';

@Component({
  selector: 'app-backgrounds',
  template: `
    <h2 class="mat-h2">Backgrounds</h2>
    <div *ngFor="let x of backgrounds">
      <mat-form-field>
        <mat-label></mat-label>
        <mat-select>
          <mat-option *ngFor="let background of backgroundList" [value]="background">
            {{background}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <app-point-selection [points]="points"
      ></app-point-selection>
    </div>
  `,
  styles: []
})
export class BackgroundsComponent {
  backgroundList = ['', 'Allies', 'Alternate Identity', 'Black Hand Memebership',
    'Contacts', 'Domain', 'Fame', 'Generation',
    'Herd', 'Influence', 'Mentor', 'Resources',
    'Retainers', 'Rituals', 'Status'];
  points = [Point.None, Point.None, Point.None, Point.None, Point.None];

  backgrounds = [0, 1, 2];

  constructor() {
  }

}
