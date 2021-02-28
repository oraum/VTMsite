import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NamedPointsGroup} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';
import {AbilitiesService} from './abilities.service';

@Component({
  selector: 'app-char-abilities',
  template: `
    <h2 class="mat-h2">Abilities</h2>

    <app-prioritized-point-selection-group [groups]="groups"
                                           [priorities]="attributeService.priorities"
                                           (pointsChanged)="attributesChanged.emit($event)"></app-prioritized-point-selection-group>
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
