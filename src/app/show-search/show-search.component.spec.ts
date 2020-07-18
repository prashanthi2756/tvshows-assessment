import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowSearchService } from '../services/show-search.service';
import { ShowSearchComponent } from './show-search.component';
import { HttpClientTestingModule, } from '@angular/common/http/testing';

describe('ShowSearchComponent', () => {
  let component: ShowSearchComponent;
  let fixture: ComponentFixture<ShowSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSearchComponent ],
      imports: [ HttpClientTestingModule],
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
});
