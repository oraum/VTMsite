import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImportExportComponent} from './import-export.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';

describe('ImportExportComponent', () => {
  let component: ImportExportComponent;
  let fixture: ComponentFixture<ImportExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportExportComponent],
      imports: [MatDialogModule, ReactiveFormsModule],
      providers: [{provide: MAT_DIALOG_DATA, useValue: {}}, {provide: MatDialogRef, useValue: {}}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
