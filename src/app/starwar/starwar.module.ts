import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerolistComponent } from './herolist/herolist.component';
import { starwarRoutingModule } from './starwar-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HerolistComponent
  ],
  imports: [
    CommonModule,
    starwarRoutingModule,
    HttpClientModule
  ]
})
export class StarwarModule { }
