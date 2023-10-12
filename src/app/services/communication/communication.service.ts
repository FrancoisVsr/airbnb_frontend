import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private selectedCity: string = '';

  selectedCity$: Observable<string> = of('')

  setSelectedCity(city: string) {
    console.log("service :" ,city);
    this.selectedCity = city;
    this.selectedCity$ = of(city);
  }

  getSelectedCity(): string {
    return this.selectedCity;
  }
}
