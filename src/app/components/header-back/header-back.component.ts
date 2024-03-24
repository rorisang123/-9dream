import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-back',
  standalone: true,
  imports: [HeaderBackComponent],
  templateUrl: './header-back.component.html',
  styleUrl: './header-back.component.scss'
})
export class HeaderBackComponent {
  @Input() backRoute!: string;

  constructor(private menuService: MenuService, private router: Router) {}

  goBack() {
    if (this.backRoute) {
      this.router.navigateByUrl(this.backRoute);
    } else {
      this.router.navigate(['/']);
    }
  }
}
