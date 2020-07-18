import { Injectable } from '@angular/core';
import { TvshowsService } from './tvshows.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShowSearchService {
  showResults: any = [];
  public showsData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public searchInput: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private shows: TvshowsService) { }
  getSearchResults(searchText: string) {
    this.searchInput.next(searchText);
    this.shows.showSearch(searchText?searchText : '').subscribe(
      (data: any) => {
        this.showResults = data.map(item => item.show);
        this.showsData.next(this.showResults);
      },
    );
  }
}
