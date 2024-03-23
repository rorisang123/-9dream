import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header-logo-burger',
  standalone: true,
  imports: [],
  templateUrl: './header-logo-burger.component.html',
  styleUrl: './header-logo-burger.component.scss'
})
export class HeaderLogoBurgerComponent {
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
