import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {HEROES} from "./mock-heroes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DOTA';
  subtitle = "defence of the ancients"
  router: string | undefined;

  constructor(private _router:Router) {
    _router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.router = _router.url;
      }
    })
  }

  ngOnInit(): void {
    let ls = localStorage.getItem("HEROES")
    if (!ls) localStorage.setItem('HEROES', JSON.stringify(HEROES));
  }

}
