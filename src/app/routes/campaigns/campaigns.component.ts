import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { CampaignCardComponent } from "../../components/campaign-card/campaign-card.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-campaigns',
    standalone: true,
    templateUrl: './campaigns.component.html',
    styleUrl: './campaigns.component.scss',
    imports: [HeaderBackBurgerComponent, CampaignCardComponent, MenuComponent, RouterLink]
})
export class CampaignsComponent {
    showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })

        this.menuService.updateMenu(false);
    }
}