import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOrganisationss(): Observable<Organisation> {
    return this.http.get<Organisation>(`${this.apiUrl}/Organisations`);
  }

  getOrganisation(OrganisationId: number): Observable<Organisation> {
    return this.http.get<Organisation>(`${this.apiUrl}/Organisations/${OrganisationId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createOrganisation(Organisation: Organisation): Observable<Organisation> {
    return this.http.post<Organisation>(this.apiUrl, Organisation)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteOrganisation(OrganisationId: number): Observable<any> {
    const url = `${this.apiUrl}/${OrganisationId}`;
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

export interface Organisation {
  Organisation_id: number;
  name: string; 
  type: string;
  mission_statement: string;
}


