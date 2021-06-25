import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DisciplineService} from '../disciplines/discipline.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-clan-selection-dialog',
  template: `
    <h2 mat-dialog-title>Select Disciplines</h2>
    <mat-dialog-content>
      <p>Please select three disciplines</p>
      <mat-form-field>
        <mat-select [(value)]="selectedDisciplines" (valueChange)="disciplineSelected($event)" multiple>
          <mat-option *ngFor="let discipline of disciplineService.disciplines" [value]="discipline">
            {{discipline}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button (click)="dialogRef.close(selectedDisciplines)" [disabled]="!selectionComplete">Select</button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ClanSelectionDialogComponent {
  selectedDisciplines: string[] = [];

  selectionComplete = false;

  constructor(public disciplineService: DisciplineService, public dialogRef: MatDialogRef<ClanSelectionDialogComponent>) {
  }

  disciplineSelected(selection: string[]): void {
    // enable select button if exactly 3 options selected
    this.selectionComplete = selection.length === 3;
  }
}
