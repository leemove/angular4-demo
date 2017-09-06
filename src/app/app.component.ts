import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  hero: Hero = new Hero(42, 'SkyDog',
    'Fetch any object at any distance',
    'Leslie Rollover');
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }
  newHero () {
    this.model = new Hero(42, '', '');
  }
}
