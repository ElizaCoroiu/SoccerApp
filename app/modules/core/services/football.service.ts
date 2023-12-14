import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { Country } from '../../standings/models/Country';

@Injectable({
    providedIn: 'root',
})
export class FootballService {
    private apiUrl = environment.apiUrl;
    public standingChangeNotification: BehaviorSubject<Country> = new BehaviorSubject<Country>({
        name: 'England',
        code: 'GB',
        flag: ''
    });

    constructor(private http: HttpClient) { }

    public get<T>(endpoint: string): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
    }
}
