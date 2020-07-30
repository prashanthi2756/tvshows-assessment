import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ShowDetailComponent } from './show-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { TvshowsService } from '../services/tvshows.service';

const testData = '{"id":123,"url": "http://www.tvmaze.com/shows/1/under-the-dome","name":"Under the Dome","type":"Scripted","language":"Englosh","genres":["Drama","Science-Fiction", "Thriller"],"status":"Ended","runtime":60,"premiered": "2013-06-24","officialSite":"http://www.cbs.com/shows/under-the-dome/","schedule":{"time":"19:00","days":["Thursday"]},"rating":{"average":6.5},"weight":97,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":25988,"thetvdb":264492,"imdb":"tt1553656"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},"summary":"<p><b>Under the Dome</b>  tells Africa\'s story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>","updated":1583514689,"_links":{"self":{"href":"http://api.tvmaze.com/shows/1"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/185054"}}}';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;
  let publicComponent: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [TvshowsService, HttpClient, {
        provide: ActivatedRoute, useValue: {
          paramMap: of(convertToParamMap({ id: 123 }))
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailComponent);
    publicComponent = component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call load data in oninit', () => {
    spyOn(publicComponent, 'loadData');
    component.ngOnInit();
    expect(publicComponent.loadData).toHaveBeenCalled();
  });
  it('should call API to get Show details', () => {
    spyOn(TvshowsService.prototype, 'getShowDetail').and.returnValue(of(JSON.parse(testData)));
    component.loadData();
    TvshowsService.prototype.getShowDetail(123).subscribe((o) => expect(o).toEqual(JSON.parse(testData)));
  });
  it('should call goBack method and should call location.back', () => {
    spyOn(publicComponent.location, 'back');
    component.naviagteToPreviousPage();
    expect(component.naviagteToPreviousPage).toBeDefined();
    expect(publicComponent.location.back).toHaveBeenCalled();
  });
  it('should return error from API', () => {
    spyOn(TvshowsService.prototype, 'getShowDetail').and.returnValue(throwError('error'));
    component.loadData();
    expect(component.hasError).toBeTruthy();
  });
});
