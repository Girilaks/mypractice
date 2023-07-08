import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service'
import { IHero } from '../model/IHero';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit{

  herolist: IHero[] = [];
  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getSuperHeroList().subscribe((result: any) => {
      console.log(result)
      this.herolist = result.results;
    }, error => {
      console.log(error)
    })
  }
}
