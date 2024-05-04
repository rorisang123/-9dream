import { Component } from '@angular/core';
import { HeaderCloseComponent } from "../header-close/header-close.component";
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [HeaderCloseComponent, RouterLink]
})
export class MenuComponent {
    userId = 2;

    constructor(private authService: AuthService, private router: Router) {}

    onLogout(): void {
        this.authService.logout();
        this.router.navigate(['/sign-in']); 
    }
}
