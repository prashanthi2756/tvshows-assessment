
import { TvshowsService } from './tvshows.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
const testData = [
  '{ "id": 46584, "url": "http://www.tvmaze.com/shows/46584/drama", "name": "Drama", "type": "Scripted", "language": "Spanish", "genres": ["Drama", "Comedy"], "status": "Running", "runtime": 25, "premiered": "2020-02-04", "officialSite": "http://www.rtve.es/playz/drama/", "schedule": { "time": "19:00", "days": ["Tuesday"] }, "rating": { "average": null }, "weight": 0, "network": { "id": 147, "name": "RTVE", "country": { "name": "Spain", "code": "ES", "timezone": "Europe/Madrid" } }, "webChannel": null, "externals": { "tvrage": null, "thetvdb": 376734, "imdb": "tt11341924" }, "image": { "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg", "original": "http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg" }, "summary": "<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>", "updated": 1583514689, "_links": { "self": { "href": "http://api.tvmaze.com/shows/46584" }, "previousepisode": { "href": "http://api.tvmaze.com/episodes/1812874" } } }'
];
describe('TvshowsService', () => {
  let service: TvshowsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TvshowsService
      ],
    });
    service = TestBed.inject(TvshowsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`should fetch show detail data as an Observable`, () => {
    service.getShowDetail(46584)
      .subscribe((data: any) => {
        expect(data.length).toBe(1);
        expect(data).toBe(testData);
      });
    const req = httpMock.expectOne('http://api.tvmaze.com/shows/46584');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
    httpMock.verify();
  });
  it(`should fetch show list data as an Observable`, () => {
    service.getShowList()
      .subscribe((data: any) => {
        expect(data.length).toBe(1);
        expect(data).toBe(testData);
      });
    const req = httpMock.expectOne('http://api.tvmaze.com/shows');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
    httpMock.verify();
  });
  it(`should fetch show search data as an Observable`, () => {
    service.showSearch('drama')
      .subscribe((data: any) => {
        expect(data.length).toBe(1);
        expect(data).toBe(testData);
      });
    const req = httpMock.expectOne(`http://api.tvmaze.com/search/shows?q=drama`);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
    httpMock.verify();
  });
});
