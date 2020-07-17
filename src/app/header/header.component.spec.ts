import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ShowSearchService } from '../show-search.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let publicComponent: any;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule ],

      providers: [ShowSearchService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    publicComponent = component =  fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('searching for tv shows', () => {
    spyOn(publicComponent.shows, 'getSearchResults').and.callThrough();
    component.search('drama');
  });


  it('user should naviagte to details pages when selected the search item', () => {
    spyOn(publicComponent.router, 'navigate').and.returnValue(true);
    component.search('drama');
    expect(publicComponent.router.navigate).toHaveBeenCalledWith(['show-search']);
  });
});
