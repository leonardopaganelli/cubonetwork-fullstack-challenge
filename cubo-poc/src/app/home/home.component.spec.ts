import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeService } from './services/home.service';
import { PersonParticipationModel } from './shared/models/person.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

describe('HomeComponent', () => {
    let homeComponent: HomeComponent;
    let homeService: HomeService;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            HomeComponent
        ],
        imports: [
            HttpClientTestingModule
        ],
        providers: [
            HomeService
        ],
        schemas: [
            CUSTOM_ELEMENTS_SCHEMA
        ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        homeComponent = fixture.componentInstance;
        homeService = TestBed.get(HomeService);
        fixture.detectChanges();
    });

    it('Should call getParticipationList on init component', () => {
        spyOn(homeService, 'getParticipationList')
            .and.returnValue(mockObservableGetParticipationList());

        homeComponent.ngOnInit();

        expect(homeComponent.persons).toEqual(mockParticipationList());
        expect(homeComponent.error).toBe(false);
        expect(homeComponent.loading).toBe(false);

    });

    it('Should call getParticipationList on init component and service return error', () => {
        spyOn(homeService, 'getParticipationList')
            .and.returnValue(mockObservableError());

        homeComponent.ngOnInit();

        expect(homeComponent.persons).toEqual([]);
        expect(homeComponent.error).toBe(true);
        expect(homeComponent.loading).toBe(false);

    });

    it('Should call insertParticipation', () => {
        const spyHomeService = spyOn(homeService, 'insertParticipation')
            .and.returnValue(mockObservableGetParticipationList());

        homeComponent.insertParticipation(mockParticipation());

        expect(spyHomeService).toHaveBeenCalledWith(mockParticipation());
        expect(homeComponent.persons).toEqual(mockParticipationList());
        expect(homeComponent.error).toBe(false);
        expect(homeComponent.loading).toBe(false);
    });

    it('Should call insertParticipation and service return error', () => {
        const spyHomeService = spyOn(homeService, 'insertParticipation')
            .and.returnValue(mockObservableError());

        homeComponent.insertParticipation(mockParticipation());

        expect(spyHomeService).toHaveBeenCalledWith(mockParticipation());
        expect(homeComponent.persons).toEqual([]);
        expect(homeComponent.error).toBe(true);
        expect(homeComponent.loading).toBe(false);
    });

    function mockParticipation(): PersonParticipationModel {
        return {
            firstName: 'Carlos',
            lastName: 'Moura',
            participation: 5
        };
    }

    function mockParticipationList(): PersonParticipationModel[] {
        return [
            {
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

    function mockObservableGetParticipationList() {
        return Observable.of(mockParticipationList());
    }

    function mockObservableError() {
        return Observable.throw({ status: 500 });
    }
});
