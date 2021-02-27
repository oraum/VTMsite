import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-char-attributes',
  templateUrl: './char-attributes.component.html',
  styleUrls: ['./char-attributes.component.scss']
})
export class CharAttributesComponent {

  attributeGroups: AttributeGroup[] = [
    {
      name: 'Physical',
      attributes: [{name: 'Strength', points: 0}, {name: 'Dexterity', points: 0}, {name: 'Stamina', points: 0}],
      priority: undefined
    },
    {
      name: 'Social',
      attributes: [{name: 'Charisma', points: 0}, {name: 'Manipulation', points: 0}, {name: 'Appearance', points: 0}],
      priority: undefined
    },
    {
      name: 'Mental',
      attributes: [{name: 'Perception', points: 0}, {name: 'Intelligence', points: 0}, {name: 'Wits', points: 0}],
      priority: undefined
    }
  ];

  constructor() {
  }

  priorityChanged(group: AttributeGroup, priority: string) {
    console.log('%o %o', group, priority);

    this.attributeGroups.filter(value => value.priority === priority).forEach(value => value.priority = undefined);
    group.priority = priority;
  }
}

interface AttributeGroup {
  name: string;
  attributes: Attribute[],
  priority: string | undefined
}

interface Attribute {
  name: string;
  points: number
}

@Component({
  selector: 'attribute-group',
  template: `
    <div class="title">
      <span>{{groupName}}</span><span *ngIf="availablePoints>=0">{{availablePoints}}</span>
    </div>
    <mat-form-field>
      <mat-label></mat-label>
      <mat-select (valueChange)="prioritySelectionChanged($event)" [value]="priority" placeholder="Priority">
        <mat-option *ngFor="let priority of attributePriorities" [value]="priority">
          {{priority}}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <div class="pointselectors">
      <div *ngFor="let attribute of attributes"><span class="attribute-name">{{attribute.name}}</span>
        <point-selector [basePoints]="1" [maxPoints]="5" [availablePoints]="availablePoints" [pointsGiven]="attribute.points"
                        (pointsChanged)="pointsChanged(attribute,$event)"></point-selector>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      padding: 4px;
    }

    .attribute-name {
      flex-grow: 1;
    }

    .pointselectors {
      display: flex;
      flex-direction: column;
    }

    .pointselectors > * {
      display: flex;
      flex-grow: 1;
      align-items: center;
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `]
})
export class AttributeGroupComponent implements OnChanges {

  @Input() groupName: string | undefined;
  @Input() priority: string | undefined;
  @Input() attributes: Attribute[] | undefined;

  @Output() priorityChanged = new EventEmitter<string>();
  attributePriorities = [undefined, 'Primary', 'Secondary', 'Tertiary'];
  availablePoints = -1;

  prioritySelectionChanged(priority: string) {
    this.priorityChanged.emit(priority);
    this.updateAvailablePoints(priority);
  }

  pointsChanged(attribute: Attribute, points: number) {
    let oldPoints = attribute.points;
    attribute.points = points;
    this.availablePoints += (oldPoints - points);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('priority' in changes) {
      this.updateAvailablePoints(changes['priority'].currentValue);
    }
  }

  private updateAvailablePoints(priority: string) {
    switch (priority) {
      case 'Primary':
        this.availablePoints = 7;
        break;
      case 'Secondary':
        this.availablePoints = 5;
        break;
      case 'Tertiary':
        this.availablePoints = 3;
        break;
      default:
        this.availablePoints = 0;
    }
    this.attributes?.forEach(value => value.points = 0);
  }
}


@Component({
  selector: 'point-selector',
  template: `
    <button mat-icon-button *ngFor="let i of pointArray" (click)="onClick(i+1)">
      <mat-icon>
        {{showIcon(i)}}
      </mat-icon>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointSelectionComponent implements OnInit, OnChanges {


  @Input() basePoints: number = 0;
  @Input() maxPoints: number = 5;
  @Input() availablePoints: number = 0;
  @Input() pointsGiven: number = -1;
  public pointArray: number[] = [];
  public points: number = 0;

  @Output() pointsChanged = new EventEmitter<number>();

  ngOnInit() {
    if (this.pointsGiven === -1) {
      this.pointsGiven = this.basePoints;
    }
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
        return;
      }
    } else {
      //decrease
      if (points >= this.basePoints) {
        this.points = points;
      } else {
        this.points = this.basePoints;
      }
    }
    this.pointsChanged.emit(points - this.basePoints);
  }

}
