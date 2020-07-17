import { TestBed, inject,tick,fakeAsync } from '@angular/core/testing';
import { TvshowsService } from './tvshows.service';

import { ShowSearchService } from './show-search.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
const testData = '{"id":46584,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":null},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}}'
describe('ShowSearchService', () => {
  let service: ShowSearchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TvshowsService, HttpClient
      ],
    });
    service = TestBed.inject(ShowSearchService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should define search results',inject([TvshowsService, HttpClient], (showService: TvshowsService, http: HttpClient) => {
    spyOn(showService, 'showSearch').and.returnValue(of(JSON.parse(testData)))
    service.getSearchResults('drama');
    expect(typeof(service.showResults)).toBe('object');
  }));
   it('should define search results on empty search text',inject([TvshowsService, HttpClient], (showService: TvshowsService, http: HttpClient) => {
    spyOn(showService, 'showSearch').and.returnValue(of(JSON.parse(testData)))
    service.getSearchResults('');
    expect(typeof(service.showResults)).toBe('object');
  }));
});
