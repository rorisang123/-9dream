import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { UserService } from './services/profile.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: any[] = [];
  title = '9dream';

  constructor(private userService: UserService,@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    
  }

  getUsers(): void {
    this.userService.getUsers().subscribe({ 
      next: user => {
        console.log(user)
      }, error: err => {
        console.log(err)
      }
    });
  }

  getUser(): void {
    this.userService.getUser(1).subscribe({ 
      next: user => {
        console.log(user)
      }, error: err => {
        console.log(err)
      }
    });
  }

  createUser(): void {
    this.userService.createUser({user_id: 1,
      wallet_address: '2x',
      first_name: 'warr',
      last_name: 'buff',
      date_of_birth: new Date('1968-11-16T00:00:00'),
      gender: 'M',
      email: 'warren@bh.com'}).subscribe({ 
      next: user => {
        console.log(user)
      }, error: err => {
        console.log(err)
      }
    })
  }

  updateUser(): void {
    this.userService.updateUser({ id: 1, name: 'John Doe', email: 'john.doe@example.com' })
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  }

  deleteWarren(): void {
    this.userService.deleteUser(1);
  }
}
