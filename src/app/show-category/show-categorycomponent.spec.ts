import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ShowCategoryComponent } from './show-category.component';
import { TvshowsService } from '../services/tvshows.service';
import { FormBuilder } from '@angular/forms';
const testData = `[
  {"id":1,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":2,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":8.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":3,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":4,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":5,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}}
]`;
const mockDataSort = `[
  {"id":1,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":2,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Action","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":8.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}}
]`;
describe('ShowCategoryComponent', () => {
  let component: ShowCategoryComponent;
  let fixture: ComponentFixture<ShowCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCategoryComponent],
      imports: [HttpClientTestingModule],
      providers: [TvshowsService, HttpClient, FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should define ngoninit', () => {
    spyOn(component, 'loadData');
    component.ngOnInit();
    expect(component.loadData).toHaveBeenCalled();
  });
  it('should return data  based on genre', () => {
    spyOn(TvshowsService.prototype, 'getShowList').and.returnValue(of(JSON.parse(testData)));
    component.loadData();
    expect(component.data.length).toEqual(5);
    component.genreData();
    expect(typeof (component.showsDataCategory)).toBe('object');
    expect(component.categoryKeys.length).toBe(1);
  });
  it('should return data when show status input value is not empty', () => {
    spyOn(TvshowsService.prototype, 'getShowList').and.returnValue(of(JSON.parse(testData)));
    component.showsForm.controls.showStatus.setValue('Running');
    component.loadData();
    spyOn(component, 'genreData');
    component.genreData();
    expect(component.allShowsData.length).toEqual(3);
  });
  it('should return data when show status input value is empty', () => {
    spyOn(TvshowsService.prototype, 'getShowList').and.returnValue(of(JSON.parse(testData)));
    component.showsForm.controls.showStatus.setValue('');
    component.loadData();
    spyOn(component, 'genreData');
    component.genreData();
    expect(component.allShowsData.length).toEqual(5);
  });
  it('should sort all shows data by order A-Z ', () => {
    const mockDataSortASC = `[
      {"id":2,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Action","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":8.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
      {"id":1,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}}
    ]`;
    spyOn(component.allShowsData, 'sort');
    spyOn(TvshowsService.prototype, 'getShowList').and.returnValue(of(JSON.parse(mockDataSort)));
    component.showsForm.controls.sortBy.setValue('A-Z');
    component.loadData();
    spyOn(component, 'genreData');
    component.genreData();
    expect(component.allShowsData).toEqual(JSON.parse(mockDataSortASC));
  });
  it('should sort all shows data by order Z-A', () => {
    spyOn(component.allShowsData, 'sort');
    spyOn(TvshowsService.prototype, 'getShowList').and.returnValue(of(JSON.parse(mockDataSort)));
    component.showsForm.controls.sortBy.setValue('Z-A');
    component.loadData();
    spyOn(component, 'genreData');
    component.genreData();
    expect(component.allShowsData).toEqual(JSON.parse(mockDataSort));
  });
  it('should sort all shows data order by average rating when sort input is empty', () => {
    spyOn(component.allShowsData, 'sort');
    spyOn(TvshowsService.prototype, 'getShowList').and.returnValue(of(JSON.parse(mockDataSort)));
    component.showsForm.controls.sortBy.setValue('');
    component.loadData();
    spyOn(component, 'genreData');
    component.genreData();
    expect(component.allShowsData).toEqual((JSON.parse(mockDataSort)));
  });
});
