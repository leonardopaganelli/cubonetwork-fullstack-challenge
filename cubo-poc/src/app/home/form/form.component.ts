import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


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
        const defaultValidation = {
            validators: [
                Validators.required
            ],
            updateOn: 'blur'
        };

        this.participationForm = this.formBuilder.group({
            firstName: ['', defaultValidation],
            lastName: ['', defaultValidation],
            participation: ['', Validators.required]
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
