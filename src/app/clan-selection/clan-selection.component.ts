import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Clan, ClanService} from './clan.service';

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
  clanChanged = new EventEmitter<string>();

  constructor(public clanService: ClanService) {
    this.clan = clanService.clanList[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('clanName' in changes) {
      this.clan = this.clanService.clanList.find(clan => clan.name === changes['clanName'].currentValue);
    }
  }

}
