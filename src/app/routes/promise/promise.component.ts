import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";

@Component({
    selector: 'app-promise',
    standalone: true,
    templateUrl: './promise.component.html',
    styleUrl: './promise.component.scss',
    imports: [HeaderBackBurgerComponent]
})
export class PromiseComponent {

}
