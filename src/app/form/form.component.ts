import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = new FormControl('')
  image = new FormControl('')
  type = new FormControl('')

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
  }

  addHero() {
    this.heroService.addHero(this.name.value,this.image.value,this.type.value);
  }

}
