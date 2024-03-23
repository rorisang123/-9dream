import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { CommonModule } from '@angular/common';
import { PromiseCardMiniComponent } from "../../components/promise-card-mini/promise-card-mini.component";

@Component({
    selector: 'app-campaign',
    standalone: true,
    templateUrl: './campaign.component.html',
    styleUrl: './campaign.component.scss',
    imports: [CommonModule, HeaderBackBurgerComponent, PromiseCardMiniComponent]
})
export class CampaignComponent {
    isOwner: boolean = true;
}
