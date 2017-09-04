import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {
  }
  async ngOnInit(): Promise<Hero[]> {
    let heroes = await this.heroService.getHeroes();
    this.heroes = heroes.slice(1, 5);
    return Promise.resolve(this.heroes);
  }
}

