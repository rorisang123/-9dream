import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}
  
  private apiUrl = environment.apiUrl;

  searchCampaigns(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/campaigns/search?term=${term}`);
  }
}
