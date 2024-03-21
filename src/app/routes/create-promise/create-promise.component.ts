import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";

@Component({
    selector: 'app-create-promise',
    standalone: true,
    templateUrl: './create-promise.component.html',
    styleUrl: './create-promise.component.scss',
    imports: [HeaderBackBurgerComponent]
})
export class CreatePromiseComponent {

}
