import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

@Component({
  selector: 'app-vote-selfie',
  standalone: true,
  imports: [RouterLink, WebcamModule],
  templateUrl: './vote-selfie.component.html',
  styleUrl: './vote-selfie.component.scss'
})
export class VoteSelfieComponent {

}
