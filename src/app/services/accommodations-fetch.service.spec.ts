import { TestBed } from '@angular/core/testing';

import { AccommodationsFetchService } from './accommodations-fetch.service';

describe('AccommodationsFetchService', () => {
  let service: AccommodationsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccommodationsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
