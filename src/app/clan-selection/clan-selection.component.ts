import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Clan, ClanService} from './clan.service';
import {MatDialog} from '@angular/material/dialog';
import {ClanSelectionDialogComponent} from '../clan-selection-dialog/clan-selection-dialog.component';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-clan-selection',
  templateUrl: './clan-selection.component.html',
  styleUrls: ['./clan-selection.component.scss']
})
export class ClanSelectionComponent implements OnChanges {

  @Input()
  clanName: string | undefined;

  public clan: Clan | undefined = undefined;

  @Output()
  clanChanged = new EventEmitter<Clan>();

  constructor(public clanService: ClanService, public dialog: MatDialog) {
    this.clan = clanService.clanList[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('clanName' in changes) {
      this.clan = this.clanService.clanList.find(clan => clan.name === changes.clanName.currentValue);
    }
  }

  clanSelected(selectedClan: Clan, clanSelect: MatSelect): void {
    if (selectedClan.name === 'Caitiff') {
      const dialogRef = this.dialog.open(ClanSelectionDialogComponent, {});

      dialogRef.afterClosed().subscribe(value => {
        if (value !== '') {
          this.clanChanged.emit({...selectedClan, disciplines: value});
        } else {
          //  reset selection as it cannot be saved
          clanSelect.writeValue(this.clan);
        }
      });
    } else {
      this.clanChanged.emit(selectedClan);
    }
  }

}
