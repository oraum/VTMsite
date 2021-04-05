import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FreebiesService} from '../freebies/freebies.service';
import {NamedPoints, NamedPointsGroup, PointsService} from '../points.service';
import {MatSelect} from '@angular/material/select';
import {MeritFlawService} from './merit-flaw.service';

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


  constructor(public freebieService: FreebiesService, public meritFlawService: MeritFlawService, private cd: ChangeDetectorRef) {
    this.meritFlaws = meritFlawService.defaultGroups;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.savedMeritFlaws !== undefined) {
      this.meritFlaws = this.savedMeritFlaws;
    }
  }

  selectionChange(np: NamedPoints, event: string, select: MatSelect, group: NamedPointsGroup): void {
    if (group.values.map(value => value.value).includes(event)) {
      // prevent duplicate
      select.writeValue(np.value);
      return;
    }
    if (np.value === undefined) {
      // value undefined - initial selection
      group.values.push({name: 'mf' + group.values.length, points: this.meritFlawService.getDefaultPoints()});
      this.freebieService.points -= this.meritFlawService.options[group.name]?.filter(value => value.name === event)[0].cost ?? 0;
    } else if (event === '') {
      // remove value
      group.values = group.values.filter(value => value.name !== np.name).map((value, index) => {
        value.name = `mf${index}`;
        return value;
      });
      this.freebieService.points += this.meritFlawService.options[group.name]?.filter(value => value.name === event)[0].cost ?? 0;
    }
    np.value = event;
    this.meritFlawsChanged.emit(this.meritFlaws);
    this.cd.markForCheck();
  }
}
