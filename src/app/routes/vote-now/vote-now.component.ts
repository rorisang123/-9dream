import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";

@Component({
    selector: 'app-vote-now',
    standalone: true,
    templateUrl: './vote-now.component.html',
    styleUrl: './vote-now.component.scss',
    imports: [HeaderBackBurgerComponent]
})
export class VoteNowComponent {

}
