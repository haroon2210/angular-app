import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  param: string | null = '';
  hero: Hero = {
    name: "",
    image: "",
    type: ""
  };

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get("hero");
    this.hero = this.heroService.getHero(this.param);
  }

}
