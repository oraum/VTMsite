import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterCreatorComponent} from './character-creator.component';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ClanSelectionComponent} from '../clan-selection/clan-selection.component';
import {CharAttributesComponent} from '../char-attributes/char-attributes.component';
import {CharAbilitiesComponent} from '../char-abilities/char-abilities.component';
import {PrioritizedPointSelectionGroupComponent} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {FreetextValueInputComponent, PointSelectionGroupComponent} from '../point-selection-group/point-selection-group.component';
import {MatIcon} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {FreebiesComponent} from '../freebies/freebies.component';
import {DisciplinesComponent} from '../disciplines/disciplines.component';
import {BackgroundsComponent} from '../backgrounds/backgrounds.component';
import {VirtuesComponent} from '../virtues/virtues.component';
import {PrioritySelectionComponent} from '../priority-selection/priority-selection.component';
import {PathComponent} from '../path/path.component';

describe('CharacterCreatorComponent', () => {
  let component: CharacterCreatorComponent;
  let fixture: ComponentFixture<CharacterCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCreatorComponent, ClanSelectionComponent, CharAttributesComponent, CharAbilitiesComponent,
        PrioritizedPointSelectionGroupComponent, PointSelectionGroupComponent, PointSelectionComponent, MatIcon, FreebiesComponent,
        DisciplinesComponent, BackgroundsComponent, VirtuesComponent, PrioritySelectionComponent, FreetextValueInputComponent,
        PathComponent],
      imports: [MatSelectModule, MatOptionModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule, MatIconTestingModule,
        ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
