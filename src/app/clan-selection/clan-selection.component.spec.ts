import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanSelectionComponent } from './clan-selection.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationPlayer} from '@angular/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

describe('ClanSelectionComponent', () => {
  let component: ClanSelectionComponent;
  let fixture: ComponentFixture<ClanSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanSelectionComponent ],
      imports: [MatFormFieldModule, MatSelectModule, NoopAnimationsModule, MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
