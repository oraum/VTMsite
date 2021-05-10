import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ImportExportComponent} from '../import-export/import-export.component';
import {Character} from '../character-creator/char-creator.service';

@Component({
  selector: 'app-save-button',
  template: `
    <button mat-icon-button aria-label="Import Export Character Button" (click)="openDialog()">
      <mat-icon>save</mat-icon>
    </button>
  `,
})
export class SaveButtonComponent {

  @Input()
  character: Character | undefined;

  @Output()
  characterImported = new EventEmitter<Character>();

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImportExportComponent, {
      data: this.character,
      width: '50em',
    });

    dialogRef.afterClosed().subscribe(value => this.characterImported.emit(value));
  }

}
