import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNumberOfVotes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/votes/count`);  
  }
}
