import { Component } from '@angular/core';
import { HeaderCloseComponent } from "../header-close/header-close.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [HeaderCloseComponent]
})
export class MenuComponent {

}
