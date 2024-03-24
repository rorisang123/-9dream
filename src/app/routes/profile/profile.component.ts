import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";
import { RouterLink, Route } from '@angular/router';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [HeaderBackComponent, RouterLink]
})
export class ProfileComponent {
}
