import { Component, OnInit } from '@angular/core';
import { HeaderLogoBurgerComponent } from '../../components/header-logo-burger/header-logo-burger.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { CampaignCardComponent } from "../../components/campaign-card/campaign-card.component";
import { CampaignCardMiniComponent } from "../../components/campaign-card-mini/campaign-card-mini.component";
import { MenuService } from '../../services/menu.service';
import { Route, RouterLink } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HeaderLogoBurgerComponent, MenuComponent, CampaignCardComponent, CampaignCardMiniComponent, RouterLink]
})
export class DashboardComponent implements OnInit{
    showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);
    }
}