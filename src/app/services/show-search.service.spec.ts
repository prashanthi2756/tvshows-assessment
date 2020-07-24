import { TestBed } from '@angular/core/testing';
import { TvshowsService } from './tvshows.service';
import { ShowSearchService } from './show-search.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
