import {Component, Input} from '@angular/core';
import {FreebiesService} from './freebies.service';

@Component({
  selector: 'app-freebies',
  template: `
    <p>
      Freebie Points: {{freebiePoints}}
    </p>
    <button mat-flat-button (click)="freebieService.toggleFreebieMode()" [color]="freebieService.freebieModeActive?'warn':undefined">Toggle
      Freebie Mode
    </button>
  `,
  styles: []
})
export class FreebiesComponent {

  @Input()
  freebiePoints = 0;

  constructor(public freebieService: FreebiesService) {
  }


}
