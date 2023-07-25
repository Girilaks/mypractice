import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroview',
  templateUrl: './heroview.component.html',
  styleUrls: ['./heroview.component.css']
})
export class HeroviewComponent implements OnInit, AfterViewInit {

  hero: any = {};
  heroForm = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    mass: new FormControl(''),
    height: new FormControl(''),
    eye_color: new FormControl(''),
    skin_color: new FormControl(''),
    vehicles: new FormControl(''),
    films: new FormControl(''),
    homeworld: new FormControl('')
  })

  films: any = [];
  isNew: boolean = true;
  successMessage = "Hero is saved successfully and available for new movies.";
  isSaved = false;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit() {
    let url = this.router.url;
    this.isNew = url.indexOf('add') > -1 ? true : false;

    if(this.isNew){
      this.films = ['Film A', 'Film B', 'Film C'];
      return;
    }
    this.heroService.getCurrentHero().subscribe(data => {
      this.heroForm.controls["name"].setValue(data.name);
      this.heroForm.controls["gender"].setValue(data.gender);
      this.heroForm.controls["mass"].setValue(data.mass);
      this.heroForm.controls["height"].setValue(data.height);
      this.heroForm.controls["eye_color"].setValue(data.eye_color);
      this.heroForm.controls["skin_color"].setValue(data.skin_color);
      this.films = data.films
    }, error => {
      console.log(error)
    })
  }

  ngAfterViewInit(): void {
      
  }

  submit() {
    this.isSaved = true;
  }
}
