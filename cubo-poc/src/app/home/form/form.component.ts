import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { customValidators } from './form.validations';
import { PersonParticipationModel } from '../shared/models/person.model';

@Component({
    selector: 'app-home-form',
    templateUrl: './form.component.html',
    styleUrls: [
        './form.component.scss',
    ]
})

export class FormComponent {
    @Output() emitData = new EventEmitter<PersonParticipationModel>();

    participationForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.generateForm();
    }

    private generateForm(): void {
        this.participationForm = this.formBuilder.group({
            firstName: ['', customValidators.firstName],
            lastName: ['', customValidators.lastName],
            participation: ['', customValidators.participation]
        });
    }

    submitForm(): void {
        if (this.participationForm.valid) {
            this.emitData.emit(this.participationForm.value);
        } else {
            console.log('dados inválidos');
        }
    }

}
