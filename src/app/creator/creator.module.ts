import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreatorRoutingModule} from './creator-routing.module';
import {CharacterCreatorComponent} from '../character-creator/character-creator.component';
import {ClanSelectionComponent} from '../clan-selection/clan-selection.component';
import {CharAttributesComponent} from '../char-attributes/char-attributes.component';
import {PointSelectionComponent} from '../point-selection/point-selection.component';
import {FreetextValueInputComponent, PointSelectionGroupComponent} from '../point-selection-group/point-selection-group.component';
import {PrioritizedPointSelectionGroupComponent} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';
import {CharAbilitiesComponent} from '../char-abilities/char-abilities.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {PrioritySelectionComponent} from '../priority-selection/priority-selection.component';
import {FreebiesComponent} from '../freebies/freebies.component';
import {DisciplinesComponent} from '../disciplines/disciplines.component';
import {BackgroundsComponent} from '../backgrounds/backgrounds.component';
import {VirtuesComponent} from '../virtues/virtues.component';
import {PathComponent} from '../path/path.component';
import {WillpowerComponent} from '../willpower/willpower.component';
import {MeritFlawComponent} from '../merit-flaw/merit-flaw.component';
import {ImportExportComponent} from '../import-export/import-export.component';
import {SaveButtonComponent} from '../save-button/save-button.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    CharacterCreatorComponent,
    ClanSelectionComponent,
    CharAttributesComponent,
    PointSelectionComponent,
    PointSelectionGroupComponent,
    PrioritizedPointSelectionGroupComponent,
    CharAbilitiesComponent,
    PrioritySelectionComponent,
    FreetextValueInputComponent,
    FreebiesComponent,
    DisciplinesComponent,
    BackgroundsComponent,
    VirtuesComponent,
    PathComponent,
    WillpowerComponent,
    MeritFlawComponent,
    ImportExportComponent,
    SaveButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreatorRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule
  ]
})
export class CreatorModule {
}
