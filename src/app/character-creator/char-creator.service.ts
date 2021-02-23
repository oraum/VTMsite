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
}
