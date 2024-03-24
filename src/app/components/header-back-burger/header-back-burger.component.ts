import { Component, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-back-burger',
  standalone: true,
  imports: [],
  templateUrl: './header-back-burger.component.html',
  styleUrl: './header-back-burger.component.scss'
})
export class HeaderBackBurgerComponent {
  showMenu!: boolean;
  @Input() title!: string;
  @Input() backRoute!: string;

  constructor(private menuService: MenuService, private router: Router) {}

  goBack() {
    if (this.backRoute) {
      this.router.navigateByUrl(this.backRoute);
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.menuService.showMenu$.subscribe(value => {
      this.showMenu = value;
    });
  }

  openMenu() {
    this.menuService.updateMenu(true);
  }
}
