import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header-back-burger',
  standalone: true,
  imports: [],
  templateUrl: './header-back-burger.component.html',
  styleUrl: './header-back-burger.component.scss'
})
export class HeaderBackBurgerComponent {
  showMenu!: boolean;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.showMenu$.subscribe(value => {
      this.showMenu = value;
    });
  }

  openMenu() {
    this.menuService.updateMenu(true);
  }
}
