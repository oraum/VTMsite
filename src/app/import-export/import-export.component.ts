import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Character} from '../character-creator/char-creator.service';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

const JSONValidator = (control: AbstractControl): ValidationErrors | null => {
  try {
    JSON.parse(control.value);
    return null;
  } catch (_: any) {
    return {invalidJson: 'Invalid JSON'};
  }
};

@Component({
  selector: 'app-import-export',
  template: `
    <h2 mat-dialog-title>Import/Export Character</h2>
    <mat-form-field appearance="fill" mat-dialog-content>
    <textarea matInput cdkTextareaAutosize cdkAutosizeMinRows="10"
              [formControl]="characterFormControl"></textarea>
      <mat-error *ngIf="characterFormControl.invalid">Invalid JSON</mat-error>
    </mat-form-field>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
      <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
      <button mat-button (click)="import()">Import</button>
    </mat-dialog-actions>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImportExportComponent {

  characterFormControl = new FormControl(undefined, [JSONValidator]);

  constructor(public dialogRef: MatDialogRef<ImportExportComponent>, @Inject(MAT_DIALOG_DATA) public data: Character) {
    this.characterFormControl.patchValue(JSON.stringify(data, undefined, 2));
  }

  import(): void {
    if (this.characterFormControl.valid) {
      this.dialogRef.close(JSON.parse(this.characterFormControl.value));
    }
  }
}
