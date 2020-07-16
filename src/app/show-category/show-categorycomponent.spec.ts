import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ShowCategoryComponent } from './show-category.component';
import { TvshowsService } from '../tvshows.service';
import { FormBuilder } from '@angular/forms';
const testData = `[
  {"id":1,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":2,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":8.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":3,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":4,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}},
  {"id":5,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":9.3},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}}
]`;

xdescribe('ShowCategoryComponent', () => {
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
    component.loadData();
  });
  it('should return data on show status value is not empty', () => {
    spyOn(TvshowsService.prototype, 'getShowList').and.returnValue(of(JSON.parse(testData)));
    component.showsForm.controls['showStatus'].setValue('Running');
    component.loadData();
    expect(component.data.length).toEqual(5);
    component.genreData();
    expect(component.showsDataDrama.length).toBe(3);
    expect(component.showsDataComedy.length).toBe(3);
    expect(component.showsDataSports.length).toBe(3);
  });
  it('should return data on show status value is empty', () => {
    spyOn(TvshowsService.prototype, 'getShowList').and.returnValue(of(JSON.parse(testData)));
    component.showsForm.controls['showStatus'].setValue('');
    component.loadData();
    expect(component.data.length).toEqual(5);
    component.genreData();
    expect(component.showsDataDrama.length).toBe(5);
    expect(component.showsDataComedy.length).toBe(5);
    expect(component.showsDataSports.length).toBe(5);
  });
  it('should call on rating change', () => {
    spyOn(component, 'genreData');
    // component.ratingChange();
    component.genreData();
  });
  it('should call on show status change', () => {
    spyOn(component, 'genreData');
    // component.statusChange();
    component.genreData();
  });
  it('should call on sort change A-Z', () => {
    spyOn(component.showsDataDrama, 'sort');
    spyOn(component.showsDataComedy, 'sort');
    spyOn(component.showsDataSports, 'sort');
    component.showsForm.controls['sortBy'].setValue('A-Z');
    component.showsDataDrama = [{ "name": "Apple" }, { "name": "Cat" }, { "name": "Ball" }];
    component.showsDataComedy = [{ "name": "Africa" }, { "name": "India" }, { "name": "Canada" }];
    component.showsDataSports = [{ "name": "Blue" }, { "name": "Red" }, { "name": "Green" }];
    // component.sortChange();
    expect(component.showsDataDrama).toEqual([{ "name": "Apple" }, { "name": "Ball" }, { "name": "Cat" }]);
    expect(component.showsDataComedy).toEqual([{ "name": "Africa" }, { "name": "Canada" }, { "name": "India" }]);
    expect(component.showsDataSports).toEqual([{ "name": "Blue" }, { "name": "Green" }, { "name": "Red" }]);
    
  });
  it('should call on sort change Z-A', () => {
    spyOn(component.showsDataDrama, 'sort');
    spyOn(component.showsDataComedy, 'sort');
    spyOn(component.showsDataSports, 'sort');
    component.showsForm.controls['sortBy'].setValue('Z-A');
    component.showsDataDrama = [{ "name": "Apple" }, { "name": "Cat" }, { "name": "Ball" }];
    component.showsDataComedy = [{ "name": "Africa" }, { "name": "India" }, { "name": "Canada" }];
    component.showsDataSports = [{ "name": "Blue" }, { "name": "Red" }, { "name": "Green" }];
    // component.sortChange();
    expect(component.showsDataDrama).toEqual([{ "name": "Cat" }, { "name": "Ball" }, { "name": "Apple" }]);
    expect(component.showsDataComedy).toEqual([{ "name": "India" }, { "name": "Canada" }, { "name": "Africa" }]);
    expect(component.showsDataSports).toEqual([{ "name": "Red" }, { "name": "Green" }, { "name": "Blue" }]);
    
  });
});
