import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logement } from '../models/Logement';
import { City } from '../models/City';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsFetchService {
    private apiBaseUrl = 'http://localhost:3000/api/airbnb-database';

    constructor(private http:HttpClient) { }

    getAccommodations() {
        return this.http.get<Array<Logement>>(`${this.apiBaseUrl}`);
    }

    getCities(ville: string){
      return this.http.get<Array<City>>(`https://geo.api.gouv.fr/communes?nom=${ville}`)
    }

    getCdPost(codesPostaux: Array<string>){
      return this.http.get<Array<City>>(`https://geo.api.gouv.fr/communes?nom=${codesPostaux}`)
    }
}
