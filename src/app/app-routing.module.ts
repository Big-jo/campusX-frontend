import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PostBoxComponent } from './post-box/post-box.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ExploteTemplateComponent } from './explore/explote-template/explote-template.component';
import { ExploreFriendsComponent } from './explore/explore-friends/explore-friends.component';
import { ProfileComponent } from './profile/profile.component';
import { AvatarComponent } from './avatar/avatar.component';
import {CommentsTemplateComponent} from './home/comments-template/comments-template.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'main', component: MainComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'post/:postID', component: PostBoxComponent},
  {path: 'campus/:id', component: ExploteTemplateComponent},
  {path: 'explore-friends', component: ExploreFriendsComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'avatar', component: AvatarComponent},
  {path: 'comments/:postID', component: CommentsTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
