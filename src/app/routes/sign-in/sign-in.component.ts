import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: (res) => {
          console.log('Sign-in successful', res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Sign-in failed', err);
        }
      });
    } else {
      console.log('Username and password are required');
    }
  }
}
