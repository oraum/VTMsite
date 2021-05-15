import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SaveButtonComponent} from './save-button.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {MatIcon} from '@angular/material/icon';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatDialogHarness} from '@angular/material/dialog/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

describe('SaveButtonComponent', () => {
  let component: SaveButtonComponent;
  let fixture: ComponentFixture<SaveButtonComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveButtonComponent, MatIcon],
      imports: [MatDialogModule, MatIconTestingModule, NoopAnimationsModule, MatTooltipModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
    const button = await loader.getHarness(MatButtonHarness);
    expect(button).toBeTruthy();

  });

  it('should open dialog', async () => {
    component.character = {freebiePoints: 10, name: 'Test'};
    const button = await loader.getHarness(MatButtonHarness);
    await button.click();
    const dialog = await TestbedHarnessEnvironment.documentRootLoader(fixture).getHarness(MatDialogHarness);
    expect(dialog).toBeTruthy();
    await dialog.close();

    expect(component.character.name).toEqual('Test');
  });
});
