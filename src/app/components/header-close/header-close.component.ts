import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header-close',
  standalone: true,
  imports: [],
  templateUrl: './header-close.component.html',
  styleUrl: './header-close.component.scss'
})
export class HeaderCloseComponent {
  showMenu!: boolean;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.showMenu$.subscribe(value => {
      this.showMenu = value;
    });
  }

  closeMenu() {
    this.menuService.updateMenu(false);
  }

}
