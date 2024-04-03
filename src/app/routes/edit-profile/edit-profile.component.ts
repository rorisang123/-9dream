import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";
import { RouterLink } from '@angular/router';
import { User } from '../../services/user.service';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-edit-profile',
    standalone: true,
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.scss',
    imports: [HeaderBackComponent, RouterLink]
})
export class EditProfileComponent {
    user!: User;

    constructor(private store: StoreService) { }

    ngOnInit() {
        this.user = this.store.getUser();
    }

    saveChanges() {
        // Implement save changes logic here
    }
}
