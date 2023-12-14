import { Injectable } from '@angular/core';
import { CachingService } from '../../core/services/caching.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { FixtureInfo } from '../models/FixtureInfo';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {
  
  constructor(private cachingService: CachingService<ApiResponse<FixtureInfo>>) { }

  getFixturesForTeam(teamId: number, season: number, last: number): Observable<ApiResponse<FixtureInfo>> {
      const endpoint = `fixtures?team=${teamId}&season=${season}&last=${last}`;
      return this.cachingService.getRequest(endpoint);
  }
}
