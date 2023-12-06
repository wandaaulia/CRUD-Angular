import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const heroRoutes: Routes = [
  {path: 'heroes', redirectTo: '/superheroes'},
  {path: 'hero/:id', redirectTo: '/superhero/:id'},
  { path: 'superheroes',  component: HeroListComponent, data: { animation: 'heroes' } },
{ path: 'superhero/:id', component: HeroDetailComponent, data: {animation : 'hero'}}
];

@NgModule({
  imports: [RouterModule.forChild(heroRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
