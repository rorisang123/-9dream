import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/Transactions`);
  }

  getTransaction(TransactionId: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/Transactions/${TransactionId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createTransaction(Transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, Transaction)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTransaction(TransactionId: number): Observable<any> {
    const url = `${this.apiUrl}/${TransactionId}`;
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

export interface Transaction {
  transaction_id: number;
  promise_id: number;
  source_id: number;
  destination_id: string;
  date: Date;
  amount: number;
}


