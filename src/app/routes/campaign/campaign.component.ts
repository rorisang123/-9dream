import { Component, OnInit } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { CommonModule } from '@angular/common';
import { PromiseCardMiniComponent } from "../../components/promise-card-mini/promise-card-mini.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CampaignService } from '../../services/campaign.service';

@Component({
    selector: 'app-campaign',
    standalone: true,
    templateUrl: './campaign.component.html',
    styleUrl: './campaign.component.scss',
    imports: [CommonModule, HeaderBackBurgerComponent, PromiseCardMiniComponent, MenuComponent, RouterLink]
})
export class CampaignComponent implements OnInit{
    constructor(private route: ActivatedRoute, private menuService: MenuService, private campaignService: CampaignService) {}

    isOwner: boolean = true;
    showMenu: boolean = true;
    campaign: any;

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        
        this.menuService.updateMenu(false);

        this.route.params.subscribe(params => {
            const campaignId = params['id'];
            this.getCampaignById(campaignId);
          });
    }

    getCampaignById(campaignId: number): void {
        this.campaignService.getCampaignById(campaignId).subscribe(campaign => {
            this.campaign = campaign;
        });
      }
}
