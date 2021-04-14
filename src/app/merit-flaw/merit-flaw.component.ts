import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FreebiesService} from '../freebies/freebies.service';
import {NamedPoints, NamedPointsGroup} from '../points.service';
import {MatSelect} from '@angular/material/select';
import {MeritFlawService} from './merit-flaw.service';
import {GenerationService} from '../generation/generation.service';

@Component({
  selector: 'app-merit-flaw',
  template: `
    <h2 class="mat-h2">Merits/Flaws</h2>

    <div class="flex">
      <div *ngFor="let group of meritFlaws">
        <div>{{group.name}}</div>
        <ng-container *ngFor="let mf of group.values">
          <mat-form-field appearance="standard" class="grow">
            <mat-select [disabled]="!freebieService.freebieModeActive" [value]="mf?.value"
                        (valueChange)="selectionChange(mf, $event, select, group)"
                        #select>
              <mat-option *ngFor="let option of meritFlawService.options[group.name]" [value]="option.name">
                {{option.name}}
              </mat-option>
            </mat-select>
          </mat-form-field>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field ::ng-deep .mat-form-field-infix {
      border: none;
    }

    mat-form-field ::ng-deep .mat-form-field-flex {
      padding: 0;
    }

    div {
      display: flex;
      /*align-items: center;*/
      flex-direction: column;
    }

    .grow {
      flex-grow: 1;
    }

  `]
})
export class MeritFlawComponent implements OnChanges {

  @Input()
  savedMeritFlaws: NamedPointsGroup[] | undefined = [];

  @Output()
  meritFlawsChanged = new EventEmitter<NamedPointsGroup[]>();


  meritFlaws: NamedPointsGroup[];


  constructor(public freebieService: FreebiesService, public meritFlawService: MeritFlawService, private cd: ChangeDetectorRef,
              private generationService: GenerationService) {
    this.meritFlaws = meritFlawService.defaultGroups;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedMeritFlaws !== undefined) {
      this.meritFlaws = this.savedMeritFlaws;
    }
  }

  selectionChange(np: NamedPoints, event: string, select: MatSelect, group: NamedPointsGroup): void {
    const isGenerationEvent = event.includes('Generation');
    if (group.values.map(value => value.value).includes(event)) {
      // prevent duplicate
      select.writeValue(np.value);
      return;
    }
    if (np.value === undefined) {
      // value undefined - initial selection

      // check for generation
      if (isGenerationEvent && group.values.map(value => value.value).filter(value => value?.includes('Generation')).length > 0) {
        // only one Generation Flaw allowed
        select.writeValue(np.value);
        return;
      }
      const cost = this.meritFlawService.options[group.name]?.filter(value => value.name === event)[0].cost ?? 0;
      if (cost <= this.freebieService.points) {
        // player has enough freebie points
        this.freebieService.points -= cost;
      } else {
        select.writeValue(np.value);
        return;
      }
      group.values.push({name: 'mf' + group.values.length, points: this.meritFlawService.getDefaultPoints()});
    } else if (event === '') {
      // remove value
      group.values = group.values.filter(value => value.name !== np.name).map((value, index) => {
        value.name = `mf${index}`;
        return value;
      });
      this.freebieService.points += this.meritFlawService.options[group.name]?.filter(value => value.name === np.value)[0].cost ?? 0;
      if (np.value.includes('Generation')) {
        this.generationService.flaw = undefined;
      }
    } else if (event !== np.value) {
      // value changes update freebie points
      const option = this.meritFlawService.options[group.name];
      const refund = option?.filter(value => value.name === np.value)[0].cost ?? 0;
      const cost = option?.filter(value => value.name === event)[0].cost ?? 0;
      if ((cost - refund) < this.freebieService.points) {
        this.freebieService.points -= (cost - refund);
      } else {
        select.writeValue(np.value);
        return;
      }
    }
    if (isGenerationEvent) {
      // update flaw in GenerationService
      this.generationService.flaw = event;
    }
    np.value = event;
    this.meritFlawsChanged.emit(this.meritFlaws);
    this.cd.markForCheck();
  }
}
