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

    /* Afin de gérer le clique sur le bouton favoris
    * et pouvoir l'afficher en rouge meme lorsque l'on reboot
    */
    updateAccommodationFavorite(id: number, isFavorite: boolean): Observable<any> {
      const url = `${this.apiBaseUrl}/${id}`;
      const body = { favourite: isFavorite };
      return this.http.put(url, body);
    }

    /* Méthode qui envoie une requête HTTP GET à l'API geo.api.gouv.fr 
    *  pour récupérer des informations sur les communes en utilisant un 
    *  nom de ville passé en paramètre, et elle attend une réponse au format 
    *  d'un tableau d'objets de type City. */
    getCities(ville: string){
      return this.http.get<Array<City>>(`https://geo.api.gouv.fr/communes?nom=${ville}`)
    }

    /*
    * Non utilisé finalement
    */
    getCdPost(codesPostaux: Array<string>){
      return this.http.get<Array<City>>(`https://geo.api.gouv.fr/communes?nom=${codesPostaux}`)
    }
}
