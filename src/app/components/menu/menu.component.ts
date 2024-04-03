import { Component } from '@angular/core';
import { HeaderCloseComponent } from "../header-close/header-close.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [HeaderCloseComponent, RouterLink]
})
export class MenuComponent {
    userId = 2;

}
