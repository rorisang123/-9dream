import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Campaign, CampaignService } from '../../services/campaign.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaign-card-mini',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './campaign-card-mini.component.html',
  styleUrl: './campaign-card-mini.component.scss'
})
export class CampaignCardMiniComponent {
  constructor(private router: Router, private campaignService: CampaignService, private userService: UserService) {}

  
  top5Campaigns!: Campaign [];
  campaignOwnerNames: { [key: number]: string } = {};

  ngOnInit(): void {

    this.campaignService.getTop5Campaigns().subscribe(
      (data) => {
        this.top5Campaigns = data;
        this.getCampaignOwnerNames();
      },
      (error) => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }

  getTop5Campaigns(): void {
    this.campaignService.getTop5Campaigns().subscribe(
        (top5Campaigns) => {
          this.top5Campaigns = top5Campaigns;
          console.log(top5Campaigns);
        }
      )
  }

  getCampaignOwnerNames(): void {
    this.top5Campaigns.forEach(campaign => {
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
}
