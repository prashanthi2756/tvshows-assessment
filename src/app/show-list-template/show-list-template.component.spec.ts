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
  
  it('Calling Next method should increment start value and end value by 5', () => {
    component.showsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    component.next();
    expect(component.start).toEqual(4);
  });


  it('Calling Prev method should decrement start value and end value by 5', () => {
    component.showsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    component.start = 5;
    component.end = 10;
    component.prev();
    expect(component.start).toEqual(0);
    expect(component.end).toEqual(5);
  });


});
