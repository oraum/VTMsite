import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Character, CharCreatorService} from './char-creator.service';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {NamedPoints, NamedPointsGroup, Point} from '../points.service';
import {Clan} from '../clan-selection/clan.service';
import {FreebiesService} from '../freebies/freebies.service';
import {GenerationService} from '../generation/generation.service';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCreatorComponent {

  characterForm = new FormGroup({
    player: new FormControl(),
    chronicle: new FormControl(),
    name: new FormControl(),
    concept: new FormControl(),
    nature: new FormControl(),
    demeanor: new FormControl(),
    sire: new FormControl(),
    generation: new FormControl({value: this.getDefaultGeneration(), disabled: true}),
  });

  character: Character;

  constructor(public charCreatorService: CharCreatorService, private freebieService: FreebiesService,
              public generationService: GenerationService) {
    this.character = this.charCreatorService.character;
    this.characterForm.patchValue(this.character);
    if (this.character.generation !== undefined) {
      this.generationService.generation = this.character.generation;
    }

    this.freebieService.points = this.character.freebiePoints;

    this.characterForm.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      charCreatorService.saveCharacter(value);
    });

    freebieService.pointsChange.subscribe(value => {
      this.character.freebiePoints = value;
      this.charCreatorService.character = this.character;
    });
    generationService.getGeneration().subscribe(generation => {
      this.characterForm.patchValue({generation}, {emitEvent: false});
      this.character.generation = generation;
    });
  }

  public getDefaultGeneration(): string {
    return this.generationService.generation;
  }

  updateClan(clan: Clan): void {
    this.character.clanBloodline = clan.name;
    this.character.disciplines = {
      name: 'disciplines',
      availablePoints: 3, freebieCost: 7,
      values: clan.disciplines.map(value => ({name: value, points: [Point.None, Point.None, Point.None, Point.None, Point.None]}))
    };
    this.charCreatorService.character = this.character;
  }

  updateAttributes(groups: NamedPointsGroup[]): void {
    this.character.attributes = groups;
    this.charCreatorService.character = this.character;
  }

  updateAbilities(groups: NamedPointsGroup[]): void {
    this.character.abilities = groups;
    this.charCreatorService.character = this.character;
  }

  updateBackgrounds(backgrounds: NamedPointsGroup): void {
    this.character.backgrounds = backgrounds;
    this.charCreatorService.character = this.character;
  }

  updateVirtues(virtues: NamedPointsGroup): void {
    this.character.virtues = virtues;
    this.charCreatorService.character = this.character;
  }

  updatePath(path: NamedPoints): void {
    this.character.path = path;
    this.charCreatorService.character = this.character;
  }

  updateDisciplines(disciplines: NamedPointsGroup): void {
    this.character.disciplines = disciplines;
    this.charCreatorService.character = this.character;
  }

  updateWillpower(willpower: NamedPoints): void {
    this.character.willpower = willpower;
    this.charCreatorService.character = this.character;
  }

  updateMeritFlaws(mfs: NamedPointsGroup[]): void {
    this.character.meritFlaws = mfs;
    this.charCreatorService.character = this.character;
  }
}
