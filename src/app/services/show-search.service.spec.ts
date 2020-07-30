import { TestBed } from '@angular/core/testing';
import { TvshowsService } from './tvshows.service';
import { ShowSearchService } from './show-search.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Component } from '@angular/core';
const testData = '{"id":123,"url": "http://www.tvmaze.com/shows/1/under-the-dome","name":"Under the Dome","type":"Scripted","language":"Englosh","genres":["Drama","Science-Fiction", "Thriller"],"status":"Ended","runtime":60,"premiered": "2013-06-24","officialSite":"http://www.cbs.com/shows/under-the-dome/","schedule":{"time":"19:00","days":["Thursday"]},"rating":{"average":6.5},"weight":97,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":25988,"thetvdb":264492,"imdb":"tt1553656"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},"summary":"<p><b>Under the Dome</b>  tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/1"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/185054"}}}';

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
});
