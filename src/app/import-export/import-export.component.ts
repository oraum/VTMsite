import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject} from '@angular/core';
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
    <mat-dialog-content>
      <div>
        <span>Export current character:</span>
        <button mat-button (click)="saveChar()">Export</button>
      </div>
      <div>
        <span>Import saved character and replace current:</span>
        <button type="button" mat-button (click)="fileInput.click()">Choose File to Upload</button>
        <input hidden (change)="onFileSelected(fileInput)" #fileInput type="file" id="file">
        <p><i>{{status}}</i></p>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
      <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
      <button mat-button (click)="import()" [disabled]="!this.importEnabled"
              [matTooltip]="importEnabled?'Import Uploaded Character':'Please Upload Character first'">Import
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImportExportComponent {

  characterFormControl = new FormControl(undefined, [JSONValidator]);
  status = '\n';
  importEnabled = false;

  constructor(public dialogRef: MatDialogRef<ImportExportComponent>, @Inject(MAT_DIALOG_DATA) public data: Character,
              private cd: ChangeDetectorRef) {
  }

  import(): void {
    if (this.characterFormControl.valid) {
      this.dialogRef.close(JSON.parse(this.characterFormControl.value));
    } else {
      this.status = 'Invalid JSON';
    }
  }

  onFileSelected(fileInput: HTMLInputElement): void {
    if (typeof (FileReader) !== 'undefined' && fileInput.files !== null) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.characterFormControl.patchValue(e.target.result);
        this.status = 'Upload Successful! Press Import to load character';
        this.importEnabled = true;
        this.cd.markForCheck();
      };

      reader.readAsText(fileInput.files[0]);
    }
  }

  saveChar(): void {
    const blob = new Blob([JSON.stringify(this.data, undefined, 2)], {type: 'application/json'});
    const link = document.createElement('a');

    link.download = 'character.json';
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ['application/json', link.download, link.href].join(':');

    const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    link.dispatchEvent(evt);
    link.remove();
  }
}
