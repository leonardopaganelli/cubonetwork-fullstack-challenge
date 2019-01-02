import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataComponent } from './data/data.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './services/home.service';

@NgModule({
    declarations: [
        DataComponent,
        FormComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        RouterModule,
        SharedModule,
        HttpClientModule
    ],
    providers: [
        HomeService
    ]
})

export class HomeModule { }
