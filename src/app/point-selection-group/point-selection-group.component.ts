import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges} from '@angular/core';
import {NamedPoints, NamedPointsGroup} from '../points.service';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-point-selection-group',
  template: `
    <div class="rows" *ngIf="group">
      <div *ngFor="let attribute of group.values; trackBy: npTrackFn ">
        <ng-container [ngSwitch]="attribute.type">
          <ng-container *ngSwitchCase="'freetext'">
            <app-free-text [value]="attribute.value"
                           (valueChanged)="freeTextChanged.emit({value: $event, name: attribute.name, group: group})"></app-free-text>
          </ng-container>
          <ng-container *ngSwitchDefault>
            <span class="attribute-name">{{attribute.name}}</span>
          </ng-container>
        </ng-container>
        <app-point-selection [points]="attribute.points"
                             (pointsClicked)="pointsClicked.emit({group:group, value:attribute, amount: $event})"
        ></app-point-selection>
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

    app-point-selection {
      margin-left: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointSelectionGroupComponent {
  @Input() group: NamedPointsGroup | undefined;

  @Output() pointsClicked = new EventEmitter<PointsClickedEvent>();

  @Output() freeTextChanged = new EventEmitter<FreeTextChangedEvent>();

  constructor() {
  }

  npTrackFn(index: number, item: NamedPoints): string {
    return `${item.name}${item.points}`;
  }

}

@Component({
  selector: 'app-free-text',
  template: `
    <mat-form-field>
      <input matInput [formControl]="freeTextForm">
    </mat-form-field>
  `,
  styles: [`
    :host mat-form-field {
      width: 125px;
    }
  `]
})
export class FreetextValueInputComponent implements OnChanges, OnDestroy {
  @Input()
  value: string | undefined = undefined;

  freeTextForm = new FormControl();

  @Output() valueChanged = new EventEmitter<string>();
  private formSubscription: Subscription;

  constructor() {
    this.formSubscription = this.freeTextForm.valueChanges.pipe(debounceTime(300)).subscribe(value1 => this.valueChanged.emit(value1));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes) {
      this.freeTextForm.patchValue(changes.value.currentValue, {emitEvent: false});
    }
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
}


export interface PointsClickedEvent {
  group: NamedPointsGroup;
  value: NamedPoints;
  amount: number;
}

export interface FreeTextChangedEvent {
  value: string;
  name: string;
  group: NamedPointsGroup;
}



