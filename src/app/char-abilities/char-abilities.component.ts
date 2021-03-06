import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {
  NamedPointsGroup,
  PointsClickedEvent,
  PriorityChangedEvent
} from '../prioritized-point-selection-group/prioritized-point-selection-group.component';
import {AbilitiesService} from './abilities.service';

@Component({
  selector: 'app-char-abilities',
  template: `
    <h2 class="mat-h2">Abilities</h2>

    <app-prioritized-point-selection-group [groups]="groups"
                                           [priorities]="attributeService.priorities"
                                           (priorityChanged)="priorityChanged($event)"
                                           (pointsClicked)="pointsClicked($event)"
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

  priorityChanged(event: PriorityChangedEvent): void {
    const newGroups = this.attributeService.prioritySelectionChanged(event.priority, event.group, this.groups);
    this.attributesChanged.emit(newGroups);
  }

  pointsClicked(event: PointsClickedEvent): void {
    const newGroups = this.attributeService.pointSelection(event.amount, event.group, event.value);
    if (newGroups !== null) {
      this.attributesChanged.emit(this.groups);
    }
  }

}
