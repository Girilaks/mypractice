import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerolistComponent } from './herolist/herolist.component';
import { HeroviewComponent } from './heroview/heroview.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';


const routes: Routes = [
    {
        path: '',
        component: HerolistComponent
    },
    {
        path: 'edit/:id',
        component: HeroviewComponent
    },
    {
        path: 'add',
        component: HeroviewComponent
    },
    {
        path: 'planetdetails',
        component: PlanetDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class starwarRoutingModule {}