import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/City';
import { AccommodationsFetchService } from 'src/app/services/accommodations-fetch.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  villes$: Observable<Array<City>>;
  @Output() searchCity : EventEmitter<string> = new EventEmitter(); 
  selectedCity: string;

  constructor(private service: AccommodationsFetchService, private communicationService: CommunicationService) { } // Injectez le Router
  
  /*TODO : ecouter mon input et faire une recherche dans mon API */
  public onInputChange(search:any) : void {
    //this.searchCity.emit(search.target.value);
    this.villes$ = this.service.getCities(search.target.value);
  }

  public onCityClick(city:City) {
    this.searchCity.emit(city.nom);
    this.selectedCity = city.nom;
  }



  // public onCdPosClick(search: any){

  // }

}
