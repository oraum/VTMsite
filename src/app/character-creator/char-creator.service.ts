import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharCreatorService {

  public generations: string[] = ['3rd', '4th', '5th', '6th', '7th',
    '8th', '9th', '10th', '11th', '12th',
    '13th', '14th', '15th'];
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
    let item = localStorage.getItem('character');
    if (item !== null) {
      return JSON.parse(item);
    } else {
      return {};
    }
  }

  saveCharacter(char: Character) {
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
}
