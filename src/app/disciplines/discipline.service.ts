import {Injectable} from '@angular/core';
import {NamedPointsGroup, Point, PointsService} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService extends PointsService {
  disciplines = ['Animalism', 'Auspex', 'Bardo', 'Celerity',
    'Chimerstry', 'Daimonion', 'Dementation',
    'Dominate', 'Flight', 'Fortitude', 'Koldunic Sorcery',
    'Melpominee', 'Mytherceria', 'Necromancy', 'Obeah',
    'Obfuscate', 'Obtenebration', 'Ogham', 'Potence',
    'Presence', 'Protean', 'Quietus', 'Sanguinus',
    'Serpentis', 'Spiritus', 'Temporis', 'Thanatosis',
    'Thaumaturgy', 'Valeren', 'Vicissitude', 'Visceratika'];
  defaultGroups: NamedPointsGroup[] = [{
    name: 'disciplines',
    availablePoints: 3, freebieCost: 7,
    values: [{name: 'dummy', points: [Point.None, Point.None, Point.None, Point.None, Point.None]}]
  }];
  priorities = [];

  constructor(freebieService: FreebiesService) {
    super(freebieService);
  }

  getDefaultPoints(): Point[] {
    return [Point.None, Point.None, Point.None, Point.None, Point.None];
  }
}
