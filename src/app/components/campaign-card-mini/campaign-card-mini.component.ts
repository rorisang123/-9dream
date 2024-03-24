import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-campaign-card-mini',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './campaign-card-mini.component.html',
  styleUrl: './campaign-card-mini.component.scss'
})
export class CampaignCardMiniComponent {
  constructor(private router: Router) {}
}
