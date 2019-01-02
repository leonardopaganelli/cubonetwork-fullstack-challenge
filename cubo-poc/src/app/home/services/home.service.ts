import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PersonParticipationModel } from '../shared/models/person.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
    constructor(
        private http: HttpClient
    ) {}

    getParticipationList(): Observable<PersonParticipationModel[]> {
        return this.http.get<PersonParticipationModel[]>(`${environment.apiBase}/list-participation`);
    }
}
