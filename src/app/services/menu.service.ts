import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  private showMenu = new BehaviorSubject<boolean>(false);
  showMenu$ = this.showMenu.asObservable();

  toggleMenu() {
    this.showMenu.next(!this.showMenu);
  }

  updateMenu(newValue: boolean) {
    this.showMenu.next(newValue);
  }
}
