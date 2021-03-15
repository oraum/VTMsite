import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Character, CharCreatorService} from './char-creator.service';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {NamedPoints, NamedPointsGroup, Point} from '../points.service';
import {Clan} from '../clan-selection/clan.service';

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
    generation: new FormControl(this.getDefaultGeneration()),
  });

  character: Character;

  constructor(public charCreatorService: CharCreatorService) {
    this.character = this.charCreatorService.character;
    this.characterForm.patchValue(this.character);

    this.characterForm.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      charCreatorService.saveCharacter(value);
    });
  }

  public getDefaultGeneration(): string {
    return this.charCreatorService.generations[10];
  }

  updateClan(clan: Clan): void {
    this.character.clanBloodline = clan.name;
    this.character.disciplines = {
      name: 'disciplines',
      availablePoints: 3,
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
}
