import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import {HEROES} from "../mock-heroes";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  heroes :Hero[] = [];

  selectedHero: Hero = {
    id: 99,
    name: "awd",
    image: 'adw',
    type: "w"
  };

  onSelect(hero: Hero): void {
    // this.selectedHero = {...hero};
  }

}
