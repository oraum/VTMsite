import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharAbilitiesComponent} from './char-abilities.component';
import {PrioritizedPointSelectionGroupComponent} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FreetextValueInputComponent, PointSelectionGroupComponent} from '../point-selection-group/point-selection-group.component';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {PrioritySelectionComponent} from '../priority-selection/priority-selection.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {MatIcon} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';

describe('CharAbilitiesComponent', () => {
  let component: CharAbilitiesComponent;
  let fixture: ComponentFixture<CharAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharAbilitiesComponent, PrioritizedPointSelectionGroupComponent, PointSelectionGroupComponent,
        PointSelectionComponent, PrioritySelectionComponent, FreetextValueInputComponent, MatIcon],
      imports: [MatFormFieldModule, MatSelectModule, NoopAnimationsModule, MatIconTestingModule, MatInputModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
