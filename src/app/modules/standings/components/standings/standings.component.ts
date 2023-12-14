import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FootballService } from '../../../core/services/football.service';
import { ApiResponse } from '../../models/ApiResponse';
import { LeagueResp } from '../../models/LeagueInfo';
import { Standing } from '../../models/Standing';
import { Team } from '../../models/Team';
import { StandingsService } from '../../services/standings.service';
import { CountryLeague } from '../../../shared/constants/CountryLeague';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'] 
})
export class StandingsComponent implements OnInit, OnDestroy{
  leagueId: number = 0;
  standings: Standing[] = [];
  teams: Team[] = [];
  countrySubscription: Subscription = new Subscription();
  standingSubscription: Subscription = new Subscription();

  constructor(private apiService: FootballService, private standingsService: StandingsService) { }

  ngOnInit(): void {
    this.getStatsBasedOnCountry();
  }

  getStatsBasedOnCountry() {
    this.countrySubscription = this.apiService.standingChangeNotification.subscribe(country => {
      this.leagueId = CountryLeague.get(country.name)!;
      const currentSeason = new Date().getFullYear();

      this.standingSubscription = this.standingsService.getCurrentStandingsByLeagueId(this.leagueId, currentSeason)
        .subscribe((data: ApiResponse<LeagueResp>) => {
          this.standings = data.response[0].league.standings[0];

        });
    });
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }

    if (this.standingSubscription) {
      this.standingSubscription.unsubscribe();
    }
  }
}
