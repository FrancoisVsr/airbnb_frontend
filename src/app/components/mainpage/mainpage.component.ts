import { Component, Input, OnInit } from '@angular/core';
import { AccommodationsFetchService } from '../../services/accommodations-fetch.service';
import { Logement } from '../../models/Logement';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  accommodations$: Observable<Array<Logement>>;
  topValue = '13vh';
  accomodations: Array<Logement>;

  constructor(
    private route: ActivatedRoute,
    private accommodationService: AccommodationsFetchService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((selectedCity) => {
      console.log('params :', selectedCity['city']);
      const cityParam = selectedCity['city'];
      this.accommodationService
        .getAccommodations()
        .subscribe((accomodations) => {
          console.log('selectedCity');
          if (cityParam) {
            console.log('if');
            this.accomodations = accomodations.filter((accomodation) => {
              return accomodation.city_name == cityParam;
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
