import { Routes } from '@angular/router';
import { SignInComponent } from './routes/sign-in/sign-in.component';
import { RegisterComponent } from './routes/register/register.component';
import { CampaignComponent } from './routes/campaign/campaign.component';
import { ContactDevelopersComponent } from './routes/contact-developers/contact-developers.component';
import { CreateCampaignComponent } from './routes/create-campaign/create-campaign.component';
import { CreatePromiseComponent } from './routes/create-promise/create-promise.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { PromiseComponent } from './routes/promise/promise.component';
import { VerifyVoteComponent } from './routes/verify-vote/verify-vote.component';
import { VoteNowComponent } from './routes/vote-now/vote-now.component';
import { VoteSelfieComponent } from './routes/vote-selfie/vote-selfie.component';
import { CampaignsComponent } from './routes/campaigns/campaigns.component';
import { EditProfileComponent } from './routes/edit-profile/edit-profile.component';
import { VoteViewCampaignComponent } from './routes/vote-view-campaign/vote-view-campaign.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'campaigns/:id', component: CampaignComponent, canActivate: [AuthGuard]},
    { path: 'campaigns', component: CampaignsComponent, canActivate: [AuthGuard] },
    { path: 'contact-developers', component: ContactDevelopersComponent, canActivate: [AuthGuard] },
    { path: 'campaign/create', component: CreateCampaignComponent },
    { path: 'promise/create', component: CreatePromiseComponent, canActivate: [AuthGuard] },
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'profile/edit', component: EditProfileComponent, canActivate: [AuthGuard] },
    { path: 'promises/:id', component: PromiseComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'vote/verify', component: VerifyVoteComponent, canActivate: [AuthGuard] },
    { path: 'vote/campaign/:id', component: VoteViewCampaignComponent, canActivate: [AuthGuard]},
    { path: 'vote', component: VoteNowComponent, canActivate: [AuthGuard] },
    { path: 'vote/selfie', component: VoteSelfieComponent, canActivate: [AuthGuard] }
];
