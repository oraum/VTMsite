import {Injectable} from '@angular/core';
import {NamedPoints, NamedPointsGroup, Point, PointsService, Priority} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';
import {GenerationService} from '../generation/generation.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundsService extends PointsService {

  defaultGroups: NamedPointsGroup[] = [{
    name: 'backgrounds',
    availablePoints: 5,
    values: [{name: 'b0', points: this.getDefaultPoints()}],
    freebieCost: 1
  }];
  priorities: Priority[] = [];

  backgroundList = ['', 'Allies', 'Alternate Identity', 'Black Hand Membership',
    'Contacts', 'Domain', 'Fame', 'Generation',
    'Herd', 'Influence', 'Mentor', 'Resources',
    'Retainers', 'Rituals', 'Status'];

  constructor(freebieService: FreebiesService, private generationService: GenerationService) {
    super(freebieService);
  }

  getDefaultPoints(): Point[] {
    return [Point.None, Point.None, Point.None, Point.None, Point.None];
  }

  pointSelection(points: number, group: NamedPointsGroup, value: NamedPoints): NamedPointsGroup | null {
    if (value.value === 'Generation' && this.generationService.hasFlaw) {
      // not allowed to spend points on Generation
      return null;
    }
    const selection = super.pointSelection(points, group, value);
    if (selection !== null && value.value === 'Generation') {
      this.generationService.spendPoints(PointsService.pointsToNumber(value.points));
    }
    return selection;
  }
}
