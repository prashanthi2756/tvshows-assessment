import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ShowDetailComponent } from './show-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TvshowsService } from '../services/tvshows.service';


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

  it('should call goBack method and should call location.back', () => {
    spyOn(publicComponent.location, 'back');
    component.naviagteToPreviousPage();
    expect(component.naviagteToPreviousPage).toBeDefined();
    expect(publicComponent.location.back).toHaveBeenCalled();
  });
});
