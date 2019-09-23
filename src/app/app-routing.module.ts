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

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LogInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'main', component: MainComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'post', component: PostBoxComponent},
  {path: 'campus/:id', component: ExploteTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
