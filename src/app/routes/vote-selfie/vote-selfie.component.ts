import { Component } from '@angular/core';
import { WebcamModule } from 'ngx-webcam';

@Component({
  selector: 'app-vote-selfie',
  standalone: true,
  imports: [WebcamModule],
  templateUrl: './vote-selfie.component.html',
  styleUrl: './vote-selfie.component.scss'
})
export class VoteSelfieComponent {

}
