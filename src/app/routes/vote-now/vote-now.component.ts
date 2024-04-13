import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-vote-now',
    standalone: true,
    templateUrl: './vote-now.component.html',
    styleUrl: './vote-now.component.scss',
    imports: [ReactiveFormsModule, CommonModule, RouterLink, HeaderBackBurgerComponent, MenuComponent]
})
export class VoteNowComponent {
    showMenu: boolean = true;
    searchControl = new FormControl('');
    results: any[] = [];

    constructor(private menuService: MenuService, private searchService: SearchService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);

        // search
        this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => term ? this.searchService.searchCampaigns(term) : [])
      )
      .subscribe(data => {
        this.results = data;
      });
    }

    selectCandidate(candidate: any): void {
        this.searchControl.setValue(candidate.mission_statement);
        this.results = [];
    }
}
