import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-vote-now',
    standalone: true,
    templateUrl: './vote-now.component.html',
    styleUrl: './vote-now.component.scss',
    imports: [RouterLink, HeaderBackBurgerComponent, MenuComponent]
})
export class VoteNowComponent {
    showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);
    }
}
