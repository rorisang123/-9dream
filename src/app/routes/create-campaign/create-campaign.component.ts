import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from '../../components/header-back-burger/header-back-burger.component';
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-create-campaign',
    standalone: true,
    templateUrl: './create-campaign.component.html',
    styleUrl: './create-campaign.component.scss',
    imports: [HeaderBackBurgerComponent, MenuComponent, RouterLink]
})
export class CreateCampaignComponent {
  showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        
        this.menuService.updateMenu(false);
    }
}
