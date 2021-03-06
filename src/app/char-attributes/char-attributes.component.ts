import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {AttributesService} from './attributes.service';
import {NamedPointsGroup} from '../points.service';

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

  @Input()
  savedAttributes: NamedPointsGroup[] | undefined = [];

  @Output()
  attributesChanged = new EventEmitter<NamedPointsGroup[]>();

  groups: NamedPointsGroup[];

  constructor(public attributeService: AttributesService) {
    this.groups = this.attributeService.defaultGroups;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedAttributes) {
      this.groups = this.attributeService.getGroups(this.savedAttributes);
    }
  }
}

