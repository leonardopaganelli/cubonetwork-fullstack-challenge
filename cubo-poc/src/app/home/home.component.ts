import { Component } from '@angular/core';
import { PersonParticipationModel } from './shared/models/person.model';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    persons: PersonParticipationModel[] =  [
        {
            firstName: 'Carlos',
            lastName: 'Moura',
            participation: 5
        },
        {
            firstName: 'Fernanda',
            lastName: 'Oliveira',
            participation: 15
        },
        {
            firstName: 'Hugo',
            lastName: 'Silva',
            participation: 20
        },
        {
            firstName: 'Eliza',
            lastName: 'Souza',
            participation: 20
        },
        {
            firstName: 'Anderson',
            lastName: 'Santos',
            participation: 40
        }
    ];
}
