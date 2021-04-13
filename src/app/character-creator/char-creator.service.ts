import {Injectable} from '@angular/core';
import {NamedPoints, NamedPointsGroup} from '../points.service';

@Injectable({
  providedIn: 'root'
})
export class CharCreatorService {

  public natureDemeanorList: string[] = ['Architect', 'Autocrat', 'Bon Vivant',
    'Bravo', 'Capitalist', 'Caregiver',
    'Celebrant', 'Chameleon', 'Child',
    'Competitor', 'Conformist', 'Conniver',
    'Creep Show', 'Curmudgeon', 'Dabbler',
    'Deviant', 'Director', 'Enigma',
    'Eye of the Storm', 'Fanatic', 'Gallant',
    'Guru', 'Idealist', 'Judge',
    'Loner', 'Martyr', 'Masochist',
    'Monster', 'Pedagogue', 'Penitent',
    'Perfectionist', 'Rebel', 'Rogue',
    'Sadist', 'Scientist', 'Sociopath',
    'Soldier', 'Survivor', 'Thrill-Seeker',
    'Traditionalist', 'Trickster', 'Visionary'];
  #character: Character;

  constructor() {
    this.#character = CharCreatorService.loadCharacter();
  }

  get character(): Character {
    return this.#character;
  }

  set character(character: Character) {
    this.#character = {...this.#character, ...character};
    this.saveCharacter(this.#character);
  }

  private static loadCharacter(): Character {
    const item = localStorage.getItem('character');
    if (item !== null) {
      return JSON.parse(item);
    } else {
      return {freebiePoints: 15};
    }
  }

  saveCharacter(char: Character): void {
    localStorage.setItem('character', JSON.stringify(char));
  }
}

export interface Character {
  player?: string | undefined;
  chronicle?: string | undefined;
  name?: string | undefined;
  concept?: string | undefined;
  nature?: string | undefined;
  demeanor?: string | undefined;
  sire?: string | undefined;
  generation?: string | undefined;
  clanBloodline?: string | undefined;
  attributes?: NamedPointsGroup[];
  abilities?: NamedPointsGroup[];
  disciplines?: NamedPointsGroup;
  backgrounds?: NamedPointsGroup;
  virtues?: NamedPointsGroup;
  path?: NamedPoints;
  willpower?: NamedPoints;
  meritFlaws?: NamedPointsGroup[];
  freebiePoints: number;
  availablePoints?: number;
}
