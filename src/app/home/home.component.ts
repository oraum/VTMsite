import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  welcomeMessage = 'Welcome to my V:TM page!';
  vtmLogo = 'assets/vtmlogo.png';
}
