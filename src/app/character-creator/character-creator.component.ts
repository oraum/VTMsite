import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Character, CharCreatorService} from './char-creator.service';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {NamedPointsGroup} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';

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

  updateClan(clan: string) {
    this.character.clanBloodline = clan;
    this.charCreatorService.character = this.character;
  }

  updateAttributes(groups: NamedPointsGroup[]) {
    this.character.attributes = groups;
    this.charCreatorService.character = this.character;
  }

  updateAbilities(groups: NamedPointsGroup[]) {
    this.character.abilities = groups;
    this.charCreatorService.character = this.character;
  }
}
