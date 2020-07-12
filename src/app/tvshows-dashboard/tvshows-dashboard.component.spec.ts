import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsDashboardComponent } from './tvshows-dashboard.component';

describe('TvshowsDashboardComponent', () => {
  let component: TvshowsDashboardComponent;
  let fixture: ComponentFixture<TvshowsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
