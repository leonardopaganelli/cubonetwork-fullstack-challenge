import { async, TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonParticipationModel } from '../shared/models/person.model';
import { environment } from '../../../environments/environment';

describe('HomeService', () => {
    let homeService: HomeService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                HomeService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        homeService = TestBed.get(HomeService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Should call getParticipationList', () => {
        homeService.getParticipationList().subscribe((data) => {
            expect(data).toEqual(mockParticipationList());
        });

        const req = httpMock.expectOne('https://7o8gazbln0.execute-api.us-east-1.amazonaws.com/dev/list-participation');

        expect(req.request.method).toBe('GET');

        req.flush(mockParticipationList());
    });

    it('Should call insertParticipation', () => {
        homeService.insertParticipation(mockParticipation()).subscribe((data) => {
            expect(data).toEqual(mockParticipationList());
        });

        const req = httpMock.expectOne('https://7o8gazbln0.execute-api.us-east-1.amazonaws.com/dev/list-participation');

        expect(req.request.method).toBe('POST');

        req.flush(mockParticipationList());
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

});
