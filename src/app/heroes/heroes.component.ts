import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';
import {Hero} from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // V0.2 code selectHero: Hero;

  constructor(private heroService: HeroService) { }


/* V0.2 code onSelect(hero: Hero): void {
    this.selectHero = hero;
    this.messageService.add('HeroService: Selected hero id={{$hero.id}}${hero.id}');
  }*/

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return ;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });

  }



}
