import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CachingService } from "../../core/services/caching.service";
import { ApiResponse } from "../models/ApiResponse";
import { LeagueResp } from "../models/LeagueInfo";

@Injectable({
    providedIn: 'root',
})
export class StandingsService {
    constructor(private cachingService: CachingService<ApiResponse<LeagueResp>>) { }

    getCurrentStandingsByLeagueId(leagueId: number, season: number): Observable<ApiResponse<LeagueResp>> {
        const endpoint = `standings?league=${leagueId}&season=${season}`;
        return this.cachingService.getRequest(endpoint);
    }
}