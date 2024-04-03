import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private user: any;
  private userFetched = false;

  constructor(private userService: UserService) { }

  async fetchUserOnce(userId: number) {
    if (!this.userFetched) {
      this.user = await this.userService.getUser(userId).toPromise();
      this.userFetched = true;
    }
    return this.user;
  }

  getUser(): any {
    return this.user;
  }
}
