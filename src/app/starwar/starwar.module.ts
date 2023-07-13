import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerolistComponent } from './herolist/herolist.component';
import { starwarRoutingModule } from './starwar-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroviewComponent } from './heroview/heroview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EyeColorDirective } from './directives/eye-color.directive';

@NgModule({
  declarations: [
    HerolistComponent,
    HeroviewComponent,
    EyeColorDirective
  ],
  imports: [
    CommonModule,
    starwarRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StarwarModule { }
