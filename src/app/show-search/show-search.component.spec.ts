import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ShowSearchService } from '../services/show-search.service';
import { ShowSearchComponent } from './show-search.component';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
const testData = `[
  {"id":1,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":2,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":8.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}}
]`;

describe('ShowSearchComponent', () => {
  let component: ShowSearchComponent;
  let fixture: ComponentFixture<ShowSearchComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSearchComponent],
      imports: [HttpClientTestingModule],
      providers: [ShowSearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should define ngoninit', inject([ShowSearchService], (service: ShowSearchService) => {
    component.ngOnInit();
    service.showsData.next(JSON.parse(testData));
    service.showsData.subscribe((o) => component.searchResults = o);
    expect(component.searchResults).toEqual(JSON.parse(testData));
  }));
});
