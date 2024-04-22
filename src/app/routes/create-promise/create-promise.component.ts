import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { Campaign, CampaignService } from '../../services/campaign.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Routes, Router } from '@angular/router';

@Component({
    selector: 'app-create-promise',
    standalone: true,
    templateUrl: './create-promise.component.html',
    styleUrl: './create-promise.component.scss',
    imports: [HeaderBackBurgerComponent, MenuComponent, RouterLink]
})
export class CreatePromiseComponent {
    showMenu: boolean = true;
    campaign: Campaign | null = null;
    promiseForm: FormGroup;

    constructor(private menuService: MenuService, private campaignService: CampaignService,
        private router: Router
    ) {
        this.promiseForm = new FormGroup({
            slogan: new FormControl(''),
            missionStatement: new FormControl('')
          });
    }

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);

        this.subscribeToCampaign();
    }

    subscribeToCampaign(): void {
        this.campaignService.currentCampaign.subscribe(campaign => {
            this.campaign = campaign;
        });
    }

    onSubmit() {
        const campaignUpdate = {
          ...this.promiseForm.value
        };
        this.campaignService.createCampaign(campaignUpdate).subscribe(response => {
          console.log('Campaign created:', response);
          this.router.navigate(['/promise/create']);
        });
      }
}
