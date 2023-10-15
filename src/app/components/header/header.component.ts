import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/City';
import { AccommodationsFetchService } from 'src/app/services/accommodations-fetch.service';

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
    private service: AccommodationsFetchService,
  ) {} 

  public onInputChange(search: any): void {
    // Si on veut filtrer en meme temps qu'on cherche une ville
    //this.searchCity.emit(search.target.value);

    // Affichage des villes lors de la recherche de celle-ci
    if (search.target.value !== '') {
      this.showCity = true;
    }
    this.villes$ = this.service.getCities(search.target.value);
  }

  // Permet de choisir la ville que l'on voit pour son logement
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
    // Une fois la ville cliquée on ferme le menu déroulant
    this.showCity = false;
  }

  /**
   * Permet lors du clique de revenir à l'accueil
   */
  reloadOriginalPage() {
    this.router.navigate(['/'])
  }
}
