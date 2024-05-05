import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from '../../components/header-back-burger/header-back-burger.component';
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { Campaign, CampaignService } from '../../services/campaign.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-create-campaign',
    standalone: true,
    templateUrl: './create-campaign.component.html',
    styleUrl: './create-campaign.component.scss',
    imports: [HeaderBackBurgerComponent, MenuComponent, RouterLink, FormsModule]
})
export class CreateCampaignComponent {
  showMenu: boolean = true;
  slogan: string = '';
  missionStatement: string = '';
  campaignerId!: number;

    constructor(private menuService: MenuService, private campaignService: CampaignService,
      authService: AuthService, private router: Router
    ) {
      authService.getCurrentUser().subscribe(user => {
      this.campaignerId = user?.userWithoutPassword?.user_id;
    });

    }

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        
        this.menuService.updateMenu(false);
    }

    onCreateCampaign(): void {
      this.campaignService.createCampaign(this.campaignerId,
        this.slogan,this.missionStatement
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
