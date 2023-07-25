import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroService } from '../services/hero.service';
import { FormGroup, FormControl } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  name = new FormControl('');
  climate = new FormControl('');
  diameter = new FormControl('');
  gravity = new FormControl('');
  orbital_period = new FormControl('');
  rotation_period = new FormControl('');
  surface_water = new FormControl('');
  terrain = new FormControl('');
  population = new FormControl('');
  residents = new FormControl('');
  films = new FormControl('');
  created = new FormControl('')

  planetDetails = new FormGroup({
    name: this.name,
    climate: this.climate,
    diameter: this.diameter,
    gravity: this.gravity,
    orbital_period: this.orbital_period,
    rotation_period: this.rotation_period,
    surface_water: this.surface_water,
    terrain: this.terrain,
    population: this.population,
    residents: this.residents,
    films: this.films,
    created: this.created,
  })

  constructor(private activatedRoute: ActivatedRoute,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getPlanetDetails();
  }

  getPlanetDetails() {
    let url = this.heroService.planetUrl;
    this.heroService.getPlanetDetails(url).subscribe(data => {
      this.planetDetails.controls['name'].setValue(data.name);
      this.planetDetails.controls['climate'].setValue(data.climate);
      this.planetDetails.controls['diameter'].setValue(data.diameter);
      this.planetDetails.controls['gravity'].setValue(data.gravity);
      this.planetDetails.controls['orbital_period'].setValue(data.orbital_period);
      this.planetDetails.controls['rotation_period'].setValue(data.rotation_period);
      this.planetDetails.controls['surface_water'].setValue(data.surface_water);
      this.planetDetails.controls['terrain'].setValue(data.terrain);
      this.planetDetails.controls['population'].setValue(data.population);
      this.planetDetails.controls['residents'].setValue(data.residents);
      this.planetDetails.controls['films'].setValue(data.films);
      this.planetDetails.controls['created'].setValue(data.created);
      console.log(this.planetDetails);
    })
  }
}
