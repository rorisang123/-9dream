import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";

@Component({
    selector: 'app-edit-profile',
    standalone: true,
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.scss',
    imports: [HeaderBackComponent]
})
export class EditProfileComponent {

}
