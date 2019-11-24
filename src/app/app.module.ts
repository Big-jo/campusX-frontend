import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PlyrModule } from 'ngx-plyr';


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
import { JwtModule, JwtInterceptor } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NotifierModule, NotifierOptions } from 'angular-notifier';


import { SearchBarComponent } from './explore/search-bar/search-bar.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { StorageService } from './services/storage.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ExploteTemplateComponent } from './explore/explote-template/explote-template.component';
import { ExploreFriendsComponent } from './explore/explore-friends/explore-friends.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { AvatarComponent } from './avatar/avatar.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {PwaService} from './services/pwa.service';
import {CommentsTemplateComponent} from './home/comments-template/comments-template.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {NotificationService} from './services/notification.service';


// export function tokenGetter() {
//    return localStorage.getItem('token');
// }
const customNotifierOptions: NotifierOptions = {
   position: {
      horizontal: {
         position: 'left',
         distance: 12
      },
      vertical: {
         position: 'bottom',
         distance: 12,
         gap: 10
      }
   },
   theme: 'material',
   behaviour: {
      autoHide: 5000,
      onClick: 'hide',
      onMouseover: 'pauseAutoHide',
      showDismissButton: true,
      stacking: 4
   },
   animations: {
      enabled: true,
      show: {
         preset: 'slide',
         speed: 300,
         easing: 'ease'
      },
      hide: {
         preset: 'fade',
         speed: 300,
         easing: 'ease',
         offset: 50
      },
      shift: {
         speed: 300,
         easing: 'ease'
      },
      overlap: 150
   }
};

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
      SearchBarComponent,
      UserprofileComponent,
      ExploteTemplateComponent,
      ExploreFriendsComponent,
      ImageUploadComponent,
     AvatarComponent,
     CommentsTemplateComponent,


   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      PlyrModule,
      BrowserAnimationsModule,
      HttpClientModule,
     NgxSmartModalModule.forRoot(),
      NotifierModule.withConfig(customNotifierOptions),
      NgZorroAntdMobileModule,
      HttpClientModule,
     ReactiveFormsModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireMessagingModule,
     ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
   ],
   providers: [
      UserService,
      PostService,
      StorageService,

     // PwaService,
     NotificationService,
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  schemas: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
