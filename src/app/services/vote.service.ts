import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private apiUrl = environment.apiUrl;
  private voteRecord: any;

  constructor(private http: HttpClient) { }

  getNumberOfVotes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/votes/count`);  
  }

  setVoteRecord(vote: any) {
    this.voteRecord = vote;
  }

  getVoteRecord() {
    return this.voteRecord;
  }

  updateVoteRecord(update: any) {
    this.voteRecord = { ...this.voteRecord, ...update };
  }

  saveVoteRecord() {
    return this.http.post(`${this.apiUrl}/`, this.voteRecord);
  }
}
export interface Vote {
    voter_id: number;
    campaign_id: number;
    date: Date;
    vote_id: number;
  }