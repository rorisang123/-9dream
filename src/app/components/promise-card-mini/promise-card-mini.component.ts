import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PromiseService } from '../../services/promise.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promise-card-mini',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './promise-card-mini.component.html',
  styleUrl: './promise-card-mini.component.scss'
})
export class PromiseCardMiniComponent {
  promises!: any;

  constructor(private promiseService: PromiseService) {}

  ngOnInit(): void {
    this.getPromises(3);
  }

  getPromises(campaignId: number): void {
    this.promiseService.getPromiseById(campaignId).subscribe(promises => {
      this.promises = promises;
    })
  }
}
