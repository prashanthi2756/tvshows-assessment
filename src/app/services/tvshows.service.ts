import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApiService } from './http-api.service';
import { TvShow } from '../tv-show-interface';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(private httpApiService: HttpApiService) { }

  public getShowList(): Observable<TvShow[]> {
    return this.httpApiService.get(`/shows`);
  }
  public getShowDetail(id: number): Observable<TvShow[]> {
    return this.httpApiService.get(`/shows/${id}`);
  }
  public showSearch(searchText: string): Observable<TvShow[]> {
    return this.httpApiService.get(`/search/shows?q=${searchText}`);
  }
}
