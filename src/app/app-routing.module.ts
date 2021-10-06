import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {FormComponent} from "./form/form.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {path: '', component: HeroesComponent, data: {type: "*"}},
  {path: 'carry', component: HeroesComponent, data: {type: "CARRY"}},
  {path: 'support', component: HeroesComponent, data: {type: "SUPPORT"}},
  {path: 'tank', component: HeroesComponent, data: {type: "TANK"}},
  {path: 'form', component: FormComponent},
  {path: 'detail/:hero', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
