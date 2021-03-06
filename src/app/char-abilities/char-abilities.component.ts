import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {AbilitiesService} from './abilities.service';
import {NamedPointsGroup} from '../points.service';

@Component({
  selector: 'app-char-abilities',
  template: `
    <h2 class="mat-h2">Abilities</h2>

    <app-prioritized-point-selection-group [groups]="groups" [service]="attributeService"
                                           [priorities]="attributeService.priorities"
                                           (attributesChanged)="attributesChanged.emit($event)"
    ></app-prioritized-point-selection-group>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharAbilitiesComponent implements OnChanges {

  @Input()
  savedAttributes: NamedPointsGroup[] | undefined = [];

  @Output()
  attributesChanged = new EventEmitter<NamedPointsGroup[]>();

  groups: NamedPointsGroup[];

  constructor(public attributeService: AbilitiesService) {
    this.groups = this.attributeService.defaultGroups;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedAttributes) {
      this.groups = this.attributeService.getGroups(this.savedAttributes);
    }
  }

}
