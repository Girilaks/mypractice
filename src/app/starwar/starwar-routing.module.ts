import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerolistComponent } from './herolist/herolist.component';
import { HeroviewComponent } from './heroview/heroview.component';


const routes: Routes = [
    {
        path: '',
        component: HerolistComponent
    },
    {
        path: ':id',
        component: HeroviewComponent
    },
    {
        path: 'add',
        component: HeroviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class starwarRoutingModule {}