import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUser(userId: string): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(userId: string, updatedUser: User): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<User>(url, updatedUser)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return Observable.throw(error.message || error);
  }
}

interface User {
  user_id: number;
  wallet_address: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: string;
  email: string;
}
