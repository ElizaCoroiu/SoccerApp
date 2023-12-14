import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../standings/services/country.service';
import { Country } from '../../../standings/models/Country';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  countries: Country[] = [];

  constructor(private apiService: FootballService, private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): Country[] {
    this.countryService.getCountries().subscribe((response) => {
      this.countries = response;
    });
    
    return this.countries;
  }

  displayStandings(country: Country) {
    this.apiService.standingChangeNotification.next(country);
  }
}
