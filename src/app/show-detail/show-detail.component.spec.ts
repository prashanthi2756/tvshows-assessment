import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ShowDetailComponent } from './show-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TvshowsService } from '../services/tvshows.service';

const testData = '{"id":46584,"url":"http://www.tvmaze.com/shows/46584/drama","name":"Drama","type":"Scripted","language":"Spanish","genres":["Drama","Comedy"],"status":"Running","runtime":25,"premiered":"2020-02-04","officialSite":"http://www.rtve.es/playz/drama/","schedule":{"time":"19:00","days":["Tuesday"]},"rating":{"average":null},"weight":0,"network":{"id":147,"name":"RTVE","country":{"name":"Spain","code":"ES","timezone":"Europe/Madrid"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":376734,"imdb":"tt11341924"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/244/611819.jpg"},"summary":"<p><b>Drama</b> tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/46584"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1812874"}}}';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [TvshowsService, HttpClient, {provide: ActivatedRoute, useValue: {
        paramMap: of(convertToParamMap({id: 123}))
      }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call API to get Show details', () => {
    spyOn(TvshowsService.prototype, 'getShowDetail').and.returnValue(of(JSON.parse(testData)));
    spyOn(component, 'loadData');
    component.ngOnInit();
    component.loadData();
  });
});