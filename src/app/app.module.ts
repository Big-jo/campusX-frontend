import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { FormsModule } from '@angular/forms';
import {PlyrModule} from 'ngx-plyr';
// import {OnsenModule} from 'ngx-onsenui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { CardComponent } from './card/card.component';
import { PostBoxComponent } from './post-box/post-box.component';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ExploreComponent,
      ProfileComponent,
      NotificationComponent,
      CardComponent,
      PostBoxComponent,
      LandingComponent,
      SignUpComponent,
      LogInComponent,
      MainComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      PlyrModule,
      BrowserAnimationsModule,
      HttpClientModule,
      NgZorroAntdMobileModule,
   ],
   providers: [],
   schemas: [

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
