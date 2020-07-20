import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ShowListTemplateComponent } from './show-list-template.component';


describe('ShowListTemplateComponent', () => {
  let component: ShowListTemplateComponent;
  let fixture: ComponentFixture<ShowListTemplateComponent>;

   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowListTemplateComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [HttpClient]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.start = 0;
    component.maxItems = 5;
    component.end = component.maxItems;
    component.showsData = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should define ngonchanges', () => {
    component.ngOnChanges();
  });
  it('should set showsData to empty array when no data received from parent for searchResults', () => {
    component.ngOnChanges();
    component.searchResults=[];
    expect(component.showsData.length).toEqual(0);
  });
  it('should set showsData when data received from parent for searchResults', () => {
    component.searchResults = [{"id":1,"name":"Drama"}]
    component.ngOnChanges();
    expect(component.showsData.length).toEqual(1);
  });
   it('should call Prev Method and set start to 0, when start is less than 0', () => {
    component.showsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    component.start = -5;
    component.prev();
    expect(component.start).toEqual(0);
    expect(component.end).toEqual(5);
  });
  it('should call Next method should increment start value and end value by 5', () => {
    component.showsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    component.next();
    expect(component.start).toEqual(5);
  });
   it('should call Next method equals or beyond available data should reset end value to max length', () => {
    component.showsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    component.start = 5;
    component.end = 10;
    component.next();
    expect(component.start).toEqual(4);
    expect(component.end).toEqual(9);
  });
 it('should call Next method when end is less than max data', () => {
    component.showsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    component.start = 0;
    component.end = 5;
    component.next();
    expect(component.start).toEqual(5);
    expect(component.end).toEqual(10);
  });
  it('should call Prev method and should decrement start value and end value by 5', () => {
    component.showsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    component.start = 5;
    component.end = 10;
    component.prev();
    expect(component.start).toEqual(0);
    expect(component.end).toEqual(5);
  });
});
