import { Component } from '@angular/core';
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { Router, RouterLink } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Vote, VoteService } from '../../services/vote.service';
import { CampaignService } from '../../services/campaign.service';

@Component({
    selector: 'app-vote-now',
    standalone: true,
    templateUrl: './vote-now.component.html',
    styleUrl: './vote-now.component.scss',
    imports: [ReactiveFormsModule, CommonModule, RouterLink, HeaderBackBurgerComponent, MenuComponent]
})
export class VoteNowComponent {
    showMenu: boolean = true;

    missionStatement: string = '';
    campaigns: any[] = [];
    selectedCampaign: any = null;
    searchControl = new FormControl('');
    results: any[] = []

    constructor(private menuService: MenuService, 
      private searchService: SearchService, private voteService: VoteService,
      private campaignService: CampaignService,
      private router: Router) {}


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
      .subscribe((data: any) => {
        this.results = data;
      });
    }

    searchCampaigns(): void {
      this.campaignService.searchCampaigns(this.missionStatement).subscribe(
        (data: any[]) => {
          this.campaigns = data;
        },
        (error: any) => {
          console.error('Error fetching campaigns', error);
        }
      );
    }

    onMissionStatementChange(event: Event): void {
      this.missionStatement = (event.target as HTMLInputElement).value;
      this.searchCampaigns();
    }

    selectCampaign(campaign: any): void {
      this.selectedCampaign = campaign;
      // Here we would handle navigating to the next page of the flow and keeping the state
    }

}
