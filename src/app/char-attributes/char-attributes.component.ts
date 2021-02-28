import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {AttributesService} from './attributes.service';
import {NamedPointsGroup} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';

@Component({
  selector: 'app-char-attributes',
  template: `
    <h2 class="mat-h2">Attributes</h2>

    <app-prioritized-point-selection-group [groups]="groups"
                                           [priorities]="attributeService.priorities"
                                           (pointsChanged)="attributesChanged.emit($event)"></app-prioritized-point-selection-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharAttributesComponent implements OnChanges {

  @Input()
  savedAttributes: NamedPointsGroup[] | undefined = [];

  @Output()
  attributesChanged = new EventEmitter<NamedPointsGroup[]>();

  groups: NamedPointsGroup[];

  constructor(public attributeService: AttributesService) {
    this.groups = this.attributeService.defaultAttributeGroups;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedAttributes) {
      this.groups = this.attributeService.getAttributeGroups(this.savedAttributes);
    }
  }
}

