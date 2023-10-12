import { Component, Input, OnInit } from '@angular/core';
import { AccommodationsFetchService } from '../../services/accommodations-fetch.service';
import { Logement } from '../../models/Logement';
import { Observable, of } from 'rxjs';
import { City } from 'src/app/models/City';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  accommodations$: Observable<Array<Logement>>;

  accomodations: Array<Logement>;

  @Input() citySelected$: Observable<string> = of('');

  constructor(private accommodationService: AccommodationsFetchService) {}

  ngOnInit(): void {
    this.citySelected$.subscribe((selectedCity) => {
      console.log('from mainpage: ', selectedCity);
      this.accommodationService
        .getAccommodations()
        .subscribe((accomodations) => {
          console.log('selectedCity');
          if (selectedCity !== '') {
            console.log('if');
            this.accomodations = accomodations.filter((accomodation) => {
              return accomodation.city_name == selectedCity;
            });
          } else {
            console.log('else');
            this.accomodations = accomodations;
          }
        });
    });
  }

  onFavoriteChanged({
    logementId,
    isFavorite,
  }: {
    logementId: number;
    isFavorite: boolean;
  }) {
    this.accommodationService
      .updateAccommodationFavorite(logementId, isFavorite)
      .subscribe(
        (response) => {
          // mise à jour localement de l'état favorite dans la liste des hébergements
          const accommodationToUpdate = this.accomodations.find(
            (accommodation) => accommodation.id === logementId
          );
          if (accommodationToUpdate) {
            accommodationToUpdate.favourite = isFavorite;
          }
        },
        (error) => {
          console.error(
            "Erreur lors de la mise à jour de l'état favorite :",
            error
          );
        }
      );
  }
}
