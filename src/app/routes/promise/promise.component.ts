import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";

@Component({
    selector: 'app-promise',
    standalone: true,
    templateUrl: './promise.component.html',
    styleUrl: './promise.component.scss',
    imports: [HeaderBackComponent, HeaderBackBurgerComponent]
})
export class PromiseComponent {

}
