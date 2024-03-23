import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-verify-vote',
    standalone: true,
    templateUrl: './verify-vote.component.html',
    styleUrl: './verify-vote.component.scss',
    imports: [HeaderBackBurgerComponent, MenuComponent]
})
export class VerifyVoteComponent {
    showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);
    }
}
