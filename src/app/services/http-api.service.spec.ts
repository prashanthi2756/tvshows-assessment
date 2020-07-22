import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpApiService } from './http-api.service';

describe('HttpApiService', () => {

  const tvShows = [
    { id: 1, url: 'http://www.tvmaze.com/shows/1/under-the-dome', name: 'Under the Dome' },
    { id: 2, url: 'http://www.tvmaze.com/shows/2/person-of-interest', name: 'Person of Interest' }
  ];

  let service: HttpApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpApiService]
    });
    service = TestBed.inject(HttpApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  describe('getShows', () => {
    it('should return all shows', () => {

      service.get(`/shows`).subscribe((shows) => { expect(shows).toEqual(tvShows); });

      const request = httpMock.expectOne(`${service.baseUrl}/shows`);
      expect(request.request.method).toBe('GET');
      request.flush(tvShows);
      httpMock.verify();
    });
  });

});
