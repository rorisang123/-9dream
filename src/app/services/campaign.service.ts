import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { User } from './user.service';
import { Promise } from './promise.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private apiUrl = environment.apiUrl;
  private campaignSource = new BehaviorSubject<Campaign | null>(null);
  currentCampaign = this.campaignSource.asObservable();

  constructor(private http: HttpClient) { }

  changeCampaign(campaign: Campaign) {
    this.campaignSource.next(campaign);
  }

  searchCampaigns(missionStatement: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/campaigns/search`);
  }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${this.apiUrl}/campaigns`);
  }

  getCampaignById(campaignId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/campaigns/${campaignId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCampaignOwnerName(userId: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/users/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTop5Campaigns(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/campaigns/top5`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCampaignBudget(campaignId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/promises/${campaignId}/budget`);
  }

  getCampaign(campaignId: number): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.apiUrl}/campaigns/${campaignId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getNumberOfCampaigns(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/campaigns/count`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createCampaign(campaign: any): Observable<any> {
    return this.http.post<Campaign>(`${this.apiUrl}/campaigns/`, campaign)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCampaign(campaignId: number): Observable<any> {
    const url = `${this.apiUrl}/${campaignId}`;
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

export interface Campaign {
  vote_count: any;
  campaign_id: number;
  campaigner_id: number; 
  slogan: string;
  mission_statement: string;
  thesis: string;
}


