import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {AttributesService} from './attributes.service';
import {NamedPoints, NamedPointsGroup, Point} from '../points.service';

@Component({
  selector: 'app-char-attributes',
  template: `
    <h2 class="mat-h2">Attributes</h2>

    <app-prioritized-point-selection-group [groups]="groups" [priorities]="attributeService.priorities" [service]="attributeService"
                                           (attributesChanged)="attributesChanged.emit($event)"
    ></app-prioritized-point-selection-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharAttributesComponent implements OnChanges {

  uglyClans = ['Gargoyles', 'Harbingers of Skulls', 'Nosferatu', 'Samedi'];

  @Input()
  savedAttributes: NamedPointsGroup[] | undefined = [];

  @Input()
  clan: string | undefined = undefined;

  @Output()
  attributesChanged = new EventEmitter<NamedPointsGroup[]>();

  groups: NamedPointsGroup[];

  constructor(public attributeService: AttributesService, private cd: ChangeDetectorRef) {
    this.groups = this.attributeService.defaultGroups;

    this.attributeService.flawChangeEvent.subscribe(() => {
      this.groups = this.attributeService.checkFlaws(this.groups);
      this.attributesChanged.emit(this.groups);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedAttributes) {
      this.groups = this.attributeService.getGroups(this.savedAttributes);
      if (this.clan !== undefined && this.uglyClans.includes(this.clan)) {
        this.getAppearance().editable = false;
        this.getAppearance().points = this.getNoPoints();
      }
    }
    if ('clan' in changes) {
      if (this.uglyClans.includes(changes.clan.currentValue)) {
        this.getAppearance().editable = false;
        this.getAppearance().points = this.getNoPoints();
      } else {
        this.getAppearance().editable = true;
        this.getAppearance().points = this.attributeService.getDefaultPoints();
      }
    }
  }

  getNoPoints(): Point[] {
    return [Point.None, Point.None, Point.None, Point.None, Point.None];
  }

  getAppearance(): NamedPoints {
    return this.groups[1].values[2];
  }
}

