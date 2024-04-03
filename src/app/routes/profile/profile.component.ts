import { Component, OnInit } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";
import { RouterLink, Route } from '@angular/router';
import { User, UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [HeaderBackComponent, RouterLink, CommonModule]
})
export class ProfileComponent implements OnInit{
  user: any;

  constructor(private store: StoreService) { }

  ngOnInit() {
    const userId = 2; // Example user ID
    this.store.fetchUserOnce(userId).then(user => {
      this.user = user;
    });
  }
}
