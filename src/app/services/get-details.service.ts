import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userModel } from '../models/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetDetailsService {
  private url: string =
    'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';
  constructor(private http: HttpClient) {}

  fetchDetails(): Observable<userModel[]> {
    return this.http.get<userModel[]>(this.url);
  }
}
