import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-campaign',
    standalone: true,
    templateUrl: './campaign.component.html',
    styleUrl: './campaign.component.scss',
    imports: [CommonModule, HeaderBackBurgerComponent]
})
export class CampaignComponent {
    isOwner: boolean = true;
}
