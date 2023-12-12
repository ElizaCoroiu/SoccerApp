import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environment';
import { Country } from '../../standings/models/Country';

@Injectable({
    providedIn: 'root',
})
export class FootballService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getCountries(): Observable<Country[]> {
        const countries = ['England', 'Spain', 'Germany', 'France', 'Italy']; 
        const endpoint = '/countries';
        const url = `${this.apiUrl}${endpoint}`;

        return this.http.get<Country[]>(url).pipe(
            map((data: any) => data.filter((country: Country) => countries.includes(country.name)))   
        );
    }
}
