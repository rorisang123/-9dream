import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isMaleActive = true;
  isFemaleActive = false;
  isNonBinaryActive = false;

  date_of_birth: Date = new Date();
  gender: string = '';
  wallet_address: string = '';
  first_name: string = '';
  last_name: string = ''; 
  email: string = '';
  password: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  toggleGender(gender: string) {
    if (gender === 'm') {
      this.isMaleActive = true;
      this.isFemaleActive = false;
      this.isNonBinaryActive = false;
    } else if (gender === 'f') {
      this.isFemaleActive = true;
      this.isMaleActive = false;
      this.isNonBinaryActive = false;
    } else if (gender === 'n') {
      this.isNonBinaryActive = true;
      this.isFemaleActive = false;
      this.isMaleActive = false;
    }
  }

  onRegister(): void {
    this.authService.register(this.date_of_birth, this.gender, this.wallet_address,
      this.first_name, this.last_name, this.email, this.password).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/sign-in']);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
