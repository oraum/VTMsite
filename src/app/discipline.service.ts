import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  disciplines = ['Animalism', 'Auspex', 'Bardo', 'Celerity',
    'Chimerstry', 'Daimonion', 'Dementation',
    'Dominate', 'Flight', 'Fortitude', 'Koldunic Sorcery',
    'Melpominee', 'Mytherceria', 'Necromancy', 'Obeah',
    'Obfuscate', 'Obtenebration', 'Ogham', 'Potence',
    'Presence', 'Protean', 'Quietus', 'Sanguinus',
    'Serpentis', 'Spiritus', 'Temporis', 'Thanatosis',
    'Thaumaturgy', 'Valeren', 'Vicissitude', 'Visceratika'];
}
