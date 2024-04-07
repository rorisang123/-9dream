import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Promise, PromiseService } from '../../services/promise.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promise-card-mini',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './promise-card-mini.component.html',
  styleUrl: './promise-card-mini.component.scss'
})
export class PromiseCardMiniComponent {
  promises!: Promise[];

  constructor(private route: ActivatedRoute, private promiseService: PromiseService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPromises(params['id']);
    });
  }

  getPromises(campaignId: number): void {
    this.promiseService.getPromiseByCampaignId(campaignId).subscribe(promises => {
      this.promises = [promises];
    })
  }
}
