// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  Component,
  ViewChild,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from 'ngx-onsenui';
import { FormsModule } from '@angular/forms';

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

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ExploreComponent,
      MainComponent,
      ProfileComponent,
      NotificationComponent,
      CardComponent,
      PostBoxComponent,
      LandingComponent,
      SignUpComponent,
      LogInComponent
   ],
   imports: [
      OnsenModule,
      AppRoutingModule,
      FormsModule,
   ],
   entryComponents: [
      MainComponent,
      HomeComponent,
      ExploreComponent,
      ProfileComponent,
      NotificationComponent,
      PostBoxComponent,
      SignUpComponent,
   ],
   providers: [],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
