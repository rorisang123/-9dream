import { Component } from '@angular/core';
import { HeaderLogoBurgerComponent } from '../../components/header-logo-burger/header-logo-burger.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { CampaignCardComponent } from "../../components/campaign-card/campaign-card.component";
import { CampaignCardMiniComponent } from "../../components/campaign-card-mini/campaign-card-mini.component";
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HeaderLogoBurgerComponent, MenuComponent, CampaignCardComponent, CampaignCardMiniComponent]
})
export class DashboardComponent {
    showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
    }
}