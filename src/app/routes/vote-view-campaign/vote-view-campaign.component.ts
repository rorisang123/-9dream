import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";
import { PromiseCardMiniComponent } from "../../components/promise-card-mini/promise-card-mini.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-vote-view-campaign',
    standalone: true,
    templateUrl: './vote-view-campaign.component.html',
    styleUrl: './vote-view-campaign.component.scss',
    imports: [RouterLink, HeaderBackComponent, PromiseCardMiniComponent, CommonModule]
})
export class VoteViewCampaignComponent {
    isOwner: boolean = false;
}
