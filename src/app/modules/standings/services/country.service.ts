import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CachingService } from '../../core/services/caching.service';
import { ApiResponse } from '../models/ApiResponse';
import { Country } from '../models/Country';

@Injectable({
    providedIn: 'root',
})
export class CountryService {
    constructor(private cachingService: CachingService<ApiResponse<Country>>) { }

    getCountries(): Observable<Country[]> {
        const countries = ['England', 'Spain', 'Germany', 'France', 'Italy'];
        const endpoint = 'countries';
        
        return this.cachingService.getRequest(endpoint).pipe(
            map((data: ApiResponse<Country>) => {
                return data.response
                  .filter(country => countries.includes(country.name)); 
              })
        );
    }
}