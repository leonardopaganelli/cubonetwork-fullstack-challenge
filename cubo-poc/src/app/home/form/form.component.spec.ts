import { FormComponent } from './form.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonParticipationModel } from '../shared/models/person.model';

describe('FormComponent', () => {
    let dataComponent: FormComponent;
    let fixture: ComponentFixture<FormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            FormComponent
        ],
        imports: [
            FormsModule,
            ReactiveFormsModule
        ],
        schemas: [
            CUSTOM_ELEMENTS_SCHEMA
        ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormComponent);
        dataComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should init component with default values', () => {
        expect(dataComponent.participationForm.controls['firstName'].value).toEqual('');
        expect(dataComponent.participationForm.controls['lastName'].value).toEqual('');
        expect(dataComponent.participationForm.controls['participation'].value).toEqual(0);
        expect(dataComponent.participationForm.valid).toBe(false);
    });

    it('Should init component with default values', () => {
        dataComponent.participationForm.controls['firstName'].setValue('a');
        dataComponent.participationForm.controls['lastName'].setValue('b');
        dataComponent.participationForm.controls['participation'].setValue(1);

        expect(dataComponent.participationForm.valid).toBe(true);
    });

    it('Should emit data when submit a valid form', () => {
        dataComponent.participationForm.controls['firstName'].setValue('a');
        dataComponent.participationForm.controls['lastName'].setValue('b');
        dataComponent.participationForm.controls['participation'].setValue(1);

        const spyEmitData = spyOn(dataComponent.emitData, 'emit');

        dataComponent.submitForm();

        expect(spyEmitData).toHaveBeenCalledWith(mockFormData());
    });

    it('Should emit data when submit a not valid form', () => {
        dataComponent.participationForm.controls['firstName'].setValue('');
        dataComponent.participationForm.controls['lastName'].setValue('');
        dataComponent.participationForm.controls['participation'].setValue(0);

        const spyEmitData = spyOn(dataComponent.emitData, 'emit');

        dataComponent.submitForm();

        expect(spyEmitData).not.toHaveBeenCalled();
    });

    function mockFormData(): PersonParticipationModel {
        return {
            firstName: 'a',
            lastName: 'b',
            participation: 1
        }
    }

});
