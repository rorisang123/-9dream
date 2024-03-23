import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-promise',
    standalone: true,
    templateUrl: './promise.component.html',
    styleUrl: './promise.component.scss',
    imports: [HeaderBackComponent, HeaderBackBurgerComponent, MenuComponent]
})
export class PromiseComponent {
    showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);
    }
}
