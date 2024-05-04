import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    let user = null;
    if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem('currentUser') as string);
    }
    this.currentUserSubject = new BehaviorSubject<any>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(map(user => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          console.log(this.currentUser)
        }
        return user;
      }));
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  register(date_of_birth: Date, gender: string, wallet_address: string, first_name: string, last_name: string,  email: string, password: string): Observable<any> {
    const user = { date_of_birth, gender, wallet_address, first_name, last_name, email, password }
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }
}
