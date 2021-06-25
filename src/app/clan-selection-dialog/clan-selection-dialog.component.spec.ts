import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSelectionDialogComponent} from './clan-selection-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectHarness} from '@angular/material/select/testing';

describe('ClanSelectionDialogComponent', () => {
  let component: ClanSelectionDialogComponent;
  let fixture: ComponentFixture<ClanSelectionDialogComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClanSelectionDialogComponent],
      imports: [MatDialogModule, ReactiveFormsModule, MatSelectModule, MatOptionModule, NoopAnimationsModule],
      providers: [{provide: MAT_DIALOG_DATA, useValue: {}}, {provide: MatDialogRef, useValue: {}}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable select button on start', async () => {
    const importBut = await loader.getHarness(MatButtonHarness.with({text: 'Select'}));

    expect(await importBut.isDisabled()).toBeTrue();
  });

  it('should enable select button after selection', async () => {
    const importBut = await loader.getHarness(MatButtonHarness.with({text: 'Select'}));
    const select = await loader.getHarness(MatSelectHarness.with({selector: 'mat-select'}));
    expect(await select.isMultiple()).toBeTrue();

    await select.clickOptions({text: /Animalism|Bardo|Daimonion/});
    expect(await select.getValueText()).toEqual('Animalism, Bardo, Daimonion');
    expect(await importBut.isDisabled()).toBeFalse();
  });
});
