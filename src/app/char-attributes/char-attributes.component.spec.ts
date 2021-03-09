import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharAttributesComponent} from './char-attributes.component';
import {PrioritizedPointSelectionGroupComponent} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {PointSelectionGroupComponent} from '../point-selection-group/point-selection-group.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {MatIcon} from '@angular/material/icon';
import {PrioritySelectionComponent} from '../priority-selection/priority-selection.component';

describe('CharAttributesComponent', () => {
  let component: CharAttributesComponent;
  let fixture: ComponentFixture<CharAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharAttributesComponent, PrioritizedPointSelectionGroupComponent, PointSelectionComponent,
        PointSelectionGroupComponent, MatIcon, PrioritySelectionComponent],
      imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, NoopAnimationsModule, MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
