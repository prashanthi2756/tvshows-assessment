import { Injectable } from '@angular/core';
import { TvshowsService } from './tvshows.service';
import { BehaviorSubject } from 'rxjs';
import { TvShow } from '../tv-show-interface';

@Injectable({
  providedIn: 'root'
})
export class ShowSearchService {
  showResults: TvShow[] = [];
  Text: string;
  public showsData: BehaviorSubject<TvShow[]> = new BehaviorSubject<TvShow[]>([]);
  public searchInput: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private shows: TvshowsService) { }
  public getSearchResults(searchText: string): void {
    this.searchInput.next(searchText);
    this.shows.showSearch(searchText).subscribe(
      (data: any[]) => {
        this.showResults = data.map(item => item.show);
        this.showsData.next(this.showResults);
      },
    );
  }
}
