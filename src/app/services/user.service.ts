import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  public userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`)
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

  updateUser = async (request: UpdateUserRequest): Promise<string> => {
    try {
      const { id, name, email } = request;
      const response = await axios.put(`http://localhost:3000/users/${id}`, { name, email });
      return response.data;
    } catch (error) {
      console.error(error);
      return `Failed to update user with ID: ${request.id}`;
    }
  };

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
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

export interface User {
  user_id: number;
  wallet_address: string; 
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: string;
  email: string;
}

export interface UpdateUserRequest {
  id: number;
  name: string;
  email: string;
}
