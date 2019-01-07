import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataComponent } from './data.component';
import { PersonParticipationModel } from '../shared/models/person.model';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DonutDataModel } from '../../shared/donut-chart/donut.model';

describe('DataComponent', () => {
    let dataComponent: DataComponent;
    let fixture: ComponentFixture<DataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            DataComponent
        ],
        schemas: [
            CUSTOM_ELEMENTS_SCHEMA
        ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataComponent);
        dataComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should init component with default values', () => {
        expect(dataComponent.donutData).toEqual([]);
        expect(dataComponent.headerTable).toEqual([
            'First name',
            'Last name',
            'Participation'
        ]);
    });

    it('Should map donutData on change input persons', () => {
        dataComponent.persons = mockParticipationList();

        dataComponent.ngOnChanges();

        expect(dataComponent.donutData).toEqual(mockMappedParticipationList());
    });

    it('Should map donutData on change input persons with empty array', () => {
        dataComponent.persons = [];

        dataComponent.ngOnChanges();

        expect(dataComponent.donutData).toEqual([]);
    });


    function mockMappedParticipationList(): DonutDataModel[] {
        return [
            {
                name: 'Carlos Moura',
                value: 5
            }, {
                name: 'Fernanda Oliveira',
                value: 15
            }];
    }

    function mockParticipationList(): PersonParticipationModel[] {
        return [{
                firstName: 'Carlos',
                lastName: 'Moura',
                participation: 5
            },
            {
                firstName: 'Fernanda',
                lastName: 'Oliveira',
                participation: 15
            }];
    }
});
