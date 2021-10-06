import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private route: ActivatedRoute) {

  }

  heroType: string = "*";

  ngOnInit(): void {
    this.route.data.subscribe(res => this.heroType = res.type)
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes(this.heroType).subscribe(heroes => this.heroes = heroes)
  }

  heroes :Hero[] = [];

  onSelect(hero: Hero): void {
    // this.selectedHero = {...hero};
  }

}
