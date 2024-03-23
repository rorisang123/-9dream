import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [HeaderBackComponent]
})
export class ProfileComponent {

}
