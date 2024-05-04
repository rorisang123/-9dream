import { Component, OnInit } from '@angular/core';
import { HeaderLogoBurgerComponent } from '../../components/header-logo-burger/header-logo-burger.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { CampaignCardComponent } from "../../components/campaign-card/campaign-card.component";
import { CampaignCardMiniComponent } from "../../components/campaign-card-mini/campaign-card-mini.component";
import { MenuService } from '../../services/menu.service';
import { Route, RouterLink } from '@angular/router';
import { Campaign, CampaignService } from '../../services/campaign.service';
import { CommonModule } from '@angular/common';
import { VoteService } from '../../services/vote.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [CommonModule, HeaderLogoBurgerComponent, MenuComponent, CampaignCardComponent, CampaignCardMiniComponent, RouterLink]
})
export class DashboardComponent implements OnInit{
    showMenu: boolean = true;
    numberOfCampaigns!: number;
    numberOfVotes!: number;
    top5Campaigns!: Campaign[];
    firstName: string = '';

    constructor(private menuService: MenuService, private campaignService: CampaignService,
        private voteService: VoteService, private authService: AuthService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);

        this.getNumberOfCampaigns();
        this.getNumberOfVotes();
        this.getTop5Campaigns();

        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.firstName) {
          this.firstName = currentUser.firstName;
        }
    }

    getTop5Campaigns(): void {
        this.campaignService.getTop5Campaigns().subscribe(
            (top5Campaigns) => {
              this.top5Campaigns = top5Campaigns;
            }
          )
    }

    getNumberOfCampaigns(): void {
        this.campaignService.getNumberOfCampaigns().subscribe(
            (numberOfCampaigns) => {
              this.numberOfCampaigns = numberOfCampaigns[0].count;
            }
          )
    }

    getNumberOfVotes(): void {
        this.voteService.getNumberOfVotes().subscribe(
            (numberOfVotes) => {
              this.numberOfVotes = numberOfVotes[0].count;
            }
          )
    }
}