import {Injectable} from '@angular/core';
import {Hero} from "./Hero";
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  HEROES: Hero[] = []

  constructor() {

  }

  getHeroes(type: string): Observable<Hero[]> {
    this.HEROES = JSON.parse(<string>localStorage.getItem("HEROES"))
    if (type === "*") return of(this.HEROES);
    return of(this.HEROES.filter(hero => hero.type === type));
  }

  getHero(name: string): Hero {
    this.getHeroes('*')
    for (let i = 0; i < this.HEROES.length ; i++) {
      if (this.HEROES[i].name == name) return this.HEROES[i];
    }
    return {name:"", image:"", type:""};
  }

  addHero(name: string, image: string, type:string) {
    this.HEROES.push({
      name,
      image,
      type
    })
    localStorage.setItem("HEROES",JSON.stringify(this.HEROES))
  }

}

