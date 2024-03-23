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

export const routes: Routes = [
    { path: 'campaign', component: CampaignComponent },
    { path: 'campaigns', component: CampaignsComponent },
    { path: 'contact-developers', component: ContactDevelopersComponent },
    { path: 'campaign/create', component: CreateCampaignComponent },
    { path: 'promise/create', component: CreatePromiseComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/edit', component: EditProfileComponent },
    { path: 'promise', component: PromiseComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'vote/verify', component: VerifyVoteComponent },
    { path: 'vote/view-campaign', component: VoteViewCampaignComponent},
    { path: 'vote', component: VoteNowComponent },
    { path: 'vote/selfie', component: VoteSelfieComponent }
];