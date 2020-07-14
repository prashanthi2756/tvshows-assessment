import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor( private http: HttpClient) { }
  getShowList(): Observable<any> {
    return this.http.get<any>(`http://api.tvmaze.com/shows`);
  }
  getShowDetail(id: number): Observable<any> {
    return this.http.get<any>(`http://api.tvmaze.com/shows/` + id);
  }
  showSearch(searchText: string): Observable<any> {
    return this.http.get<any>(`http://api.tvmaze.com/search/shows?q=`  + searchText);
  }
}
