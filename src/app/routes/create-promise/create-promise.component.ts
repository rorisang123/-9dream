import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-create-promise',
    standalone: true,
    templateUrl: './create-promise.component.html',
    styleUrl: './create-promise.component.scss',
    imports: [HeaderBackBurgerComponent, MenuComponent]
})
export class CreatePromiseComponent {
    showMenu: boolean = true;

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
    }
}
