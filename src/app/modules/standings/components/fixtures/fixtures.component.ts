import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FixtureInfo } from '../../models/FixtureInfo';
import { FixturesService } from '../../services/fixtures.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.scss'
})
export class FixturesComponent implements OnInit, OnDestroy {
  fixtureInfo: FixtureInfo[] = [];
  teamId: number = 0;
  countryName: string = '';
  fixturesSubscription: Subscription = new Subscription();
  routeSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private fixturesService: FixturesService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.teamId = +params['id'];
    });

    this.getLastTenFixturesForTeam(this.teamId);
  }

  private getLastTenFixturesForTeam(id: number) {
    const currentSeason = new Date().getFullYear();
    this.fixturesSubscription = this.fixturesService.getFixturesForTeam(id, currentSeason, 10).subscribe(data => this.fixtureInfo = data.response);
  }

  ngOnDestroy(): void {
    if (this.fixturesSubscription) {
      this.fixturesSubscription.unsubscribe();
    }

    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
