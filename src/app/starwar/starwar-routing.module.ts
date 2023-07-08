import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerolistComponent } from './herolist/herolist.component';


const routes: Routes = [
    {
        path: '',
        component: HerolistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class starwarRoutingModule {}