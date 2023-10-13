import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/City';
import { AccommodationsFetchService } from 'src/app/services/accommodations-fetch.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  villes$: Observable<Array<City>>;
  @Output() searchCity: EventEmitter<string> = new EventEmitter();
  selectedCity: string;
  showCity: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AccommodationsFetchService,
    private communicationService: CommunicationService
  ) {} // Injectez le Router

  public onInputChange(search: any): void {
    // Si on veut filtrer en meme temps qu'on cherche une ville
    //this.searchCity.emit(search.target.value);

    // Affichage des villes
    if (search.target.value !== '') {
      this.showCity = true;
    }
    this.villes$ = this.service.getCities(search.target.value);
  }

  public onCityClick(city: City) {
    this.router.navigate(['accueil'], {
      queryParams: {
        city: city.nom,
      },
    });
    // Permet de filtrer lors du clique
    // this.searchCity.emit(city.nom);
    // this.selectedCity = city.nom;
    // Ferme la liste des villes
    this.showCity = false;
  }

  reloadOriginalPage() {
    this.router.navigate(['/'])
  }

  // public onCdPosClick(search: any){

  // }
}
