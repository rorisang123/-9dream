import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-profile',
    standalone: true,
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.scss',
    imports: [HeaderBackComponent, RouterLink]
})
export class EditProfileComponent {

}
