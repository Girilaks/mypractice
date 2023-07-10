import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service'
import { IHero } from '../model/IHero';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit{

  herolist: IHero[] = [];
  constructor(private heroService: HeroService, private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.heroService.getSuperHeroList().subscribe((result: any) => {
      console.log(result)
      this.herolist = result.results;
    }, error => {
      console.log(error)
    })
  }

  createHero() {
    this.router.navigateByUrl('heros/add');
  }

  editHero(hero: any) {
    this.router.navigate([hero.name], { relativeTo: this.activatedRoute });
    setTimeout(() => {
      this.heroService.setCurrentHero(hero);
    }, 500);
  }
}
