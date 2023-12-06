import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
import { switchMap} from 'rxjs/operators'
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$ : Observable<Hero>

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private service : HeroService
  ) { 
    console.log(this.hero$);

  }

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
      this.service.getHero(params.get('id'))
      )
    )
      console.log('ini hero', this.hero$)

  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null
     // Pass along the hero id if available
  // so that the HeroList component can select that hero.
  // Include a junk 'foo' property for fun.
    this.router.navigate(['/superheroes', { id : heroId, foo:'foo'}])
  }

}
