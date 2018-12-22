import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataComponent } from './data/data.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
    declarations: [
        DataComponent,
        FormComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        RouterModule
    ]
})

export class HomeModule { }
