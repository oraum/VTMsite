import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {CharacterCreatorComponent} from './character-creator/character-creator.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {ClanSelectionComponent} from './clan-selection/clan-selection.component';
import {CharAttributesComponent} from './char-attributes/char-attributes.component';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {PointSelectionComponent} from './point-selection/point-selection.component';
import {PointSelectionGroupComponent} from './point-selection-group/point-selection-group.component';
import {PrioritizedPointSelectionGroupComponent} from './prioritized-point-selection-group/prioritized-point-selection-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterCreatorComponent,
    ClanSelectionComponent,
    CharAttributesComponent,
    PointSelectionComponent,
    PointSelectionGroupComponent,
    PrioritizedPointSelectionGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
