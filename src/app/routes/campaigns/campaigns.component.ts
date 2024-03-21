import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";

@Component({
    selector: 'app-campaigns',
    standalone: true,
    templateUrl: './campaigns.component.html',
    styleUrl: './campaigns.component.scss',
    imports: [HeaderBackBurgerComponent]
})
export class CampaignsComponent {

}
