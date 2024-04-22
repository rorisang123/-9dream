import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from '../../components/header-back-burger/header-back-burger.component';
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { Campaign, CampaignService } from '../../services/campaign.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-campaign',
    standalone: true,
    templateUrl: './create-campaign.component.html',
    styleUrl: './create-campaign.component.scss',
    imports: [HeaderBackBurgerComponent, MenuComponent, RouterLink]
})
export class CreateCampaignComponent {
  showMenu: boolean = true;
  campaignForm = new FormGroup({
    slogan: new FormControl(''),
    missionStatement: new FormControl('')
  });

    constructor(private menuService: MenuService, private campaignService: CampaignService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        
        this.menuService.updateMenu(false);
    }

    onSubmit() {
        this.campaignService.createCampaign({
          campaigner_id: 1,  // Static user ID for now
          slogan: this.campaignForm.value.slogan || "",
          mission_statement: this.campaignForm.value.missionStatement || ""
        }).subscribe({
          next: (response) => {
            this.router.navigate(['/promise/create', response.campaignId]);
          },
          error: (error) => console.error('Error creating campaign:', error)
        });
    }
}
