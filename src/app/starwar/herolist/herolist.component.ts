import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service'
import { IHero } from '../model/IHero';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit{

  herolist: IHero[] = [];
  constructor(private heroService: HeroService, private router: Router,
    private activatedRoute: ActivatedRoute) {

      router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
        // alert('NavigationStart')
        }

        if(event instanceof NavigationEnd) {
          //alert('NavigationEnd')
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
      
  }

  ngOnInit(): void {
    this.heroService.getSuperHeroList().subscribe((result: any) => {
      console.log(result)
      this.herolist = result;
    }, error => {
      console.log(error)
    })

    this.activatedRoute.url.subscribe(url => {
      console.log(url)
    })
    console.log(this.activatedRoute.component)
    console.log(this.activatedRoute.firstChild)
    console.log(this.activatedRoute.children)
    console.log(this.activatedRoute.outlet)
  }

  createHero() {
    this.router.navigateByUrl('heros/add');
  }

  editHero(hero: any) {
    this.router.navigate(['edit/'+hero.name], { relativeTo: this.activatedRoute });
    setTimeout(() => {
      this.heroService.setCurrentHero(hero);
    }, 500);
  }

  viewPlanetDetails(planetUrl: string, type: string){
    this.heroService.planetUrl = planetUrl;
    this.router.navigate(['heros/planetdetails'], {queryParams: {type:type }})
  }
}
