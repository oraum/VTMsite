import {Component} from '@angular/core';
import {Clan, ClanService} from './clan.service';

@Component({
  selector: 'app-clan-selection',
  templateUrl: './clan-selection.component.html',
  styleUrls: ['./clan-selection.component.scss']
})
export class ClanSelectionComponent {

  public clan: Clan | undefined = undefined;

  constructor(public clanService: ClanService) {
    this.clan = clanService.clanList[0];
  }

}
