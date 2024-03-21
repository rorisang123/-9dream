import { Component } from '@angular/core';
import { HeaderLogoBurgerComponent } from '../../components/header-logo-burger/header-logo-burger.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HeaderLogoBurgerComponent, MenuComponent]
})
export class DashboardComponent {
    showMenu: boolean = true;
}