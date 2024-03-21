import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";

@Component({
    selector: 'app-vote-view-campaign',
    standalone: true,
    templateUrl: './vote-view-campaign.component.html',
    styleUrl: './vote-view-campaign.component.scss',
    imports: [HeaderBackBurgerComponent]
})
export class VoteViewCampaignComponent {

}
