import {animate, animation, style, transition} from '@angular/animations';

export const defaultFadeIn = animation([
  style({opacity: 0}),
  animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({opacity: 1}))
]);

export const defaultFadeOut = animation([
  animate('200ms cubic-bezier(0.4, 0.0, 1, 1)', style({opacity: 0}))
]);
