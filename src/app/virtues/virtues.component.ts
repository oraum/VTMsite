import {Component, OnInit} from '@angular/core';
import {Point} from '../points.service';

@Component({
  selector: 'app-virtues',
  template: `
    <h2 class="mat-h2">Backgrounds</h2>
    <div>
      <span>Conscience/Conviction</span>
      <app-point-selection [points]="getPoints()"></app-point-selection>
    </div>
    <div>
      <span>Self-Control/Instinct</span>
      <app-point-selection [points]="getPoints()"></app-point-selection>
    </div>
    <div>
      <span>Courage</span>
      <app-point-selection [points]="getPoints()"></app-point-selection>
    </div>
    <h2 class="mat-h2">Humanity/Path</h2>
    <div>
      <mat-form-field class="grow">
        <mat-select>
          <mat-option *ngFor="let background of pathList" [value]="background">
            {{background}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <app-point-selection [points]="getDoublePoints()"></app-point-selection>
    <h2 class="mat-h2">Willpower</h2>
    <app-point-selection [points]="getDoublePoints()"></app-point-selection>
  `,
  styles: [`
    div {
      display: flex;
      align-items: center
    }

    div > span, .grow {
      flex-grow: 1;
    }
  `]
})
export class VirtuesComponent implements OnInit {

  pathList = ['Humanity', 'Path of Asakku', 'Path of the Beast', 'Path of Blood',
    'Path of Bones', 'Path of Caine', 'Path of Cathari',
    'Path of Death and the Soul', 'Path of Ecstasy', 'Path of Entelechy',
    'Path of Evil Revelations', 'Path of the Feral Heart', 'Path of Harmony',
    'Path of the Hive', 'Path of Honorable Accord', 'Path of Lilith',
    'Path of Metamorphosis', 'Path of Night', 'Path of Orion',
    'Path of Paradox (Mayaparisatya)', 'Path of Paradox (Samsara)',
    'Path of Paradox (Western)', 'Path of Power and the Inner Voice',
    'Path of Redemption', 'Path of Typhon', 'Path of Self-Focus',
    'Path of the Scorched Heart', 'Sharia El-Sama', 'Path of the Warrior'];

  constructor() {
  }

  ngOnInit(): void {
  }

  getPoints(): Point [] {
    return [Point.Original, Point.None, Point.None, Point.None, Point.None];
  }

  getDoublePoints(): Point[] {
    return [...this.getPoints(), Point.None, Point.None, Point.None, Point.None, Point.None];
  }

}
