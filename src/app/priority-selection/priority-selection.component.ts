import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Priority} from '../points.service';

@Component({
  selector: 'app-priority-selection',
  template: `
    <mat-form-field>
      <mat-label></mat-label>
      <mat-select (valueChange)="priorityChanged.emit($event)"
                  [value]="selectedPriority" placeholder="Priority">
        <mat-option *ngFor="let priority of priorities" [value]="priority">
          {{priority.name}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [`
    :host {
      display: inline-flex;
    }

    mat-form-field {
      flex-grow: 1;
    }
  `]
})
export class PrioritySelectionComponent {

  @Input()
  priorities: Priority[] = [];
  @Input()
  selectedPriority: Priority | undefined = undefined;
  @Output() priorityChanged = new EventEmitter<Priority>();

  constructor() {
  }


}
