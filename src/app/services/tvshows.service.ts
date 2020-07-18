import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpApiService } from './http-api.service';
@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

 constructor(private httpApiService: HttpApiService) { }
  getShowList(): Observable<any> {
    return this.httpApiService.get<any>(`/shows`);
  }
  getShowDetail(id: number): Observable<any> {
    return this.httpApiService.get<any>(`/shows/${id}`);
  }
  showSearch(searchText: string): Observable<any> {
    return this.httpApiService.get<any>(`/search/shows?q=${searchText}`);
  }
}
