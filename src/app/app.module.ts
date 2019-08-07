// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  Component,
  ViewChild,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from 'ngx-onsenui';
// import {OnsenModule} from 'ngx-onsenui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    MainComponent,
    ProfileComponent,
    NotificationComponent,
  ], 
  imports: [
    // Browser Module,
    AppRoutingModule,
    OnsenModule,
  ],
  entryComponents: [HomeComponent, ExploreComponent, ProfileComponent, NotificationComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
