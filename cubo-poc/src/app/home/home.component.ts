import { Component, OnInit } from '@angular/core';
import { PersonParticipationModel } from './shared/models/person.model';
import { HomeService } from './services/home.service';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    persons: PersonParticipationModel[] = [];
    error: boolean;
    loading: boolean;

    constructor(
        private homeService: HomeService
    ) { }

    ngOnInit() {
        this.getParticipationList();
    }

    getParticipationList(): void {
        this.loading = true;
        this.error = false;

        this.homeService.getParticipationList()
            .subscribe(data => {
                this.persons = data;

                this.loading = false;
            }, error => {
                this.error = true;
                console.log(error);

                this.loading = false;
            });
    }

    insertParticipation(dataParticipation: PersonParticipationModel): void {
        this.loading = true;
        this.error = false;

        this.homeService.insertParticipation(dataParticipation)
            .subscribe(data => {
                this.persons = data;

                this.loading = false;
            }, error => {
                this.error = true;
                console.log(error);

                this.loading = false;
            });
    }
}
