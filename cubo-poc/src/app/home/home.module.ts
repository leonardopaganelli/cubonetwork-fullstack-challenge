import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule,
        HomeRoutingModule
    ]
})

export class HomeModule { }
