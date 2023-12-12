import { Component, OnInit } from '@angular/core';
import { Country } from '../../../standings/models/Country';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  countries: Country[] = [];
  
  constructor(private apiService:  FootballService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): Country[] {
    // this.apiService.getCountries().subscribe((response) => {
    //   console.log(response); 
    //   this.countries = response;
    // });
    this.countries = [
      { id: 1, name: 'England', code: 'GB', flag: ''},
      { id: 1, name: 'Spain', code: 'ES', flag: ''},
      { id: 1, name: 'Germany', code: 'DE', flag: ''},
      { id: 1, name: 'France', code: 'FR', flag: ''},
      { id: 1, name: 'Italy', code: 'IT', flag: ''}
    ]
    return this.countries;
  }
}
