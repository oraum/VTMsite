import {Component} from '@angular/core';
import {CharCreatorService} from './char-creator.service';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss']
})
export class CharacterCreatorComponent {

  constructor(public charCreatorService: CharCreatorService) {
  }

  public getDefaultGeneration(): string {
    return this.charCreatorService.generations[10];
  }
}
