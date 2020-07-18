import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  public readonly baseUrl: string = environment.urls.tvmazeApi;

  constructor(private httpClient: HttpClient) { }

  public get<T>(serviceUrl: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + serviceUrl);
  }
}
