import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logement } from '../models/Logement';
import { City } from '../models/City';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsFetchService {
    private apiBaseUrl = 'http://localhost:3000/api/airbnb-database';

    constructor(private http:HttpClient) { }

    getAccommodations() {
        return this.http.get<Array<Logement>>(`${this.apiBaseUrl}`);
    }

    updateAccommodationFavorite(id: number, isFavorite: boolean): Observable<any> {
      const url = `${this.apiBaseUrl}/${id}`;
      const body = { favourite: isFavorite };
      return this.http.put(url, body);
    }

    getCities(ville: string){
      return this.http.get<Array<City>>(`https://geo.api.gouv.fr/communes?nom=${ville}`)
    }

    getCdPost(codesPostaux: Array<string>){
      return this.http.get<Array<City>>(`https://geo.api.gouv.fr/communes?nom=${codesPostaux}`)
    }
}
