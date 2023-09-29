import { Component } from '@angular/core';
import { AccommodationsFetchService } from '../../services/accommodations-fetch.service';
import { Logement } from '../../models/Logement';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {
    accommodations$: Observable<Array<Logement>>;

    constructor(private accommodationService: AccommodationsFetchService) {}
    ngOnInit(): void {
      this.accommodations$ = this.accommodationService.getAccommodations();
    }
}
