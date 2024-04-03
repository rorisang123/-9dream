import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Campaign, CampaignService } from '../../services/campaign.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaign-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './campaign-card.component.html',
  styleUrl: './campaign-card.component.scss'
})
export class CampaignCardComponent implements OnInit {
  campaigns!: any[];
  campaignOwnerNames: { [key: number]: string } = {};
  promiseSums: { [key: number]: number } = {};
  campaignBudgets: { [key: number]: number } = {};
  
  private subscription!: Subscription;

  constructor(private campaignService: CampaignService, private userService: UserService) {}
  
  ngOnInit(): void {
    this.campaignService.getCampaigns().subscribe(
      (data) => {
        this.campaigns = data;
        this.getCampaignOwnerNames();
        this.getCampaignBudgets();
      },
      (error) => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }

  getCampaignOwnerNames(): void {
    this.campaigns.forEach(campaign => {
      this.userService.getUser(campaign.campaigner_id).subscribe(
        (user) => {
          this.campaignOwnerNames[campaign.campaigner_id] = user.first_name + ' ' + user.last_name;
        },
        (error) => {
          console.error(`Error fetching owner's name for campaign ${campaign.campaign_id}:`, error);
        }
      );
    });
  }

  getCampaignBudgets(): void {
    this.campaigns.forEach(campaign => {
      this.campaignService.getCampaignBudget(campaign.campaign_id).subscribe(
        (budget) => {
          console.log(budget.sum)
          this.campaignBudgets[campaign.campaign_id] = budget.sum;
        }
      )
    })
  }
}
