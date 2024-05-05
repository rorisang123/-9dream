import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { Campaign, CampaignService } from '../../services/campaign.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { PromiseService } from '../../services/promise.service';
import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-create-promise',
    standalone: true,
    templateUrl: './create-promise.component.html',
    styleUrl: './create-promise.component.scss',
    imports: [HeaderBackBurgerComponent, MenuComponent, RouterLink, FormsModule, DatePipe]
})
export class CreatePromiseComponent {
    showMenu: boolean = true;
    organisation_id!: number;
    value!: number;
    smart_contract_address!: string;
    owner_id!: number;
    timestamp!: string;
    campaign_id!: number;

    constructor(private menuService: MenuService, private campaignService: CampaignService,
        private promiseService: PromiseService, private router: Router, private authService: AuthService,
        private datePipe: DatePipe
    ) {
        authService.getCurrentUser().subscribe(user => {
            this.owner_id = user?.userWithoutPassword?.user_id;
            this.smart_contract_address = user?.userWithoutPassword?.wallet_address;
        });
        const myDate = new Date();
        this.timestamp = datePipe.transform(myDate, 'yyyy-MM-dd') as string;

        this.campaignService.currentCampaignId.subscribe(id => {
            this.campaign_id = id as number;
            console.log(id)
          });
    }

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);
    }

    createPromise(): void {
        // smart_contract_address, owner_id, organisation_id, timestamp, value, campaign_id
        this.promiseService.createPromise(this.smart_contract_address, this.owner_id,
            this.organisation_id, new Date(this.timestamp), this.value, this.campaign_id
          ).subscribe({
            next: (response) => {
              this.router.navigate(['../promise', 'create']);
            },
            error: (error) => {
              console.error('Failed to create campaign', error);
            }
          });
    }
}
