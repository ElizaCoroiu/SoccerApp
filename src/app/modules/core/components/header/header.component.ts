import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../../../standings/services/country.service';
import { Country } from '../../../standings/models/Country';
import { FootballService } from '../../services/football.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  countrySubscription: Subscription = new Subscription();
  constructor(private apiService: FootballService, private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): Country[] {
    this.countrySubscription = this.countryService.getCountries().subscribe((response) => {
      this.countries = response;
    });

    return this.countries;
  }

  displayStandings(country: Country) {
    this.apiService.standingChangeNotification.next(country);
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }
  }
}
