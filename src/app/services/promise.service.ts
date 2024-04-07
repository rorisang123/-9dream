import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPromises(): Observable<Promise> {
    return this.http.get<Promise>(`${this.apiUrl}/promises`);
  }

  getPromise(promiseId: number): Observable<Promise> {
    return this.http.get<Promise>(`${this.apiUrl}/promises/${promiseId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPromiseById(campaignId: number): Observable<Promise> {
    return this.http.get<Promise>(`${this.apiUrl}/promises/${campaignId}`);
  }

  getPromiseByCampaignId(campaignId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/promises/campaign/${campaignId}`);
  }

  createPromise(promise: Promise): Observable<Promise> {
    return this.http.post<Promise>(this.apiUrl, promise)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePromise(promiseId: number): Observable<any> {
    const url = `${this.apiUrl}/${promiseId}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Your error'))
  }
}

export interface Promise {
  promise_id: number;
  smart_contract_address: string; 
  owner_id: number;
  organisation_id: number;
  promise_timestamp: Date;
  promise_value: number;
  organisation_name: string;
}


