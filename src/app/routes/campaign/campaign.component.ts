import { Component, OnInit } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { CommonModule } from '@angular/common';
import { PromiseCardMiniComponent } from "../../components/promise-card-mini/promise-card-mini.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-campaign',
    standalone: true,
    templateUrl: './campaign.component.html',
    styleUrl: './campaign.component.scss',
    imports: [CommonModule, HeaderBackBurgerComponent, PromiseCardMiniComponent, MenuComponent]
})
export class CampaignComponent implements OnInit{
    isOwner: boolean = true;
    showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
    }
}
