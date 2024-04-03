import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isMaleActive = true;
  isFemaleActive = false;
  isNonBinaryActive = false;

  toggleGender(gender: string) {
    if (gender === 'male') {
      this.isMaleActive = true;
      this.isFemaleActive = false;
      this.isNonBinaryActive = false;
    } else if (gender === 'female') {
      this.isFemaleActive = true;
      this.isMaleActive = false;
      this.isNonBinaryActive = false;
    } else if (gender === 'nonbinary') {
      this.isNonBinaryActive = true;
      this.isFemaleActive = false;
      this.isMaleActive = false;
    }
  }
}
