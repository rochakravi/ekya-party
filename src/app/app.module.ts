import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";


import {ApiService} from './services/api.service' ;
import { AppComponent } from './app.component';
import { MembersComponent } from './components/members/members.component';
import { HomeComponent } from './components/home/home.component';
import { ActivityComponent } from './components/activity/activity.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SuggestionComponent } from './components/notice-board/suggestion/suggestion.component';
import { CurrentIssueComponent } from './components/notice-board/current-issue/current-issue.component';
import { PromotersComponent } from './components/notice-board/promoters/promoters.component';
import { ActiveComponent } from './components/notice-board/active/active.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("330898017483353")
          // provider: new FacebookLoginProvider("Your-Facebook-app-id")
        }
        // {
        //   id: GoogleLoginProvider.PROVIDER_ID,
        //   provider: new GoogleLoginProvid("Your-Google-Client-Id")
        // },
      ]
  );
  return config;
}



const routes : Routes = [
  {path :'', component:LoginComponent},  
  {path :'login', component:LoginComponent},  
  {path :'home', component:HomeComponent},
  { path:'suggestion', component: SuggestionComponent},
  { path:'post', component: PostComponent},
  {path :'members', component:MembersComponent},
  {path :'activity', component:GalleryComponent},
  {path :'gallery', component:GalleryComponent},
  {path :'about', component:NoticeBoardComponent ,
    children: [                          //<---- child components declared here
            {
                path:'suggestion',
                component: SuggestionComponent
            },
            {
                path:'issue',
                component: CurrentIssueComponent
            },
            {
                path:'promoters',
                component: PromotersComponent
            }
            ,
            {
                path:'highly-active',
                component: ActiveComponent
            }
            
        ]},
  // { path: 'notice-board/suggestion', component: SuggestionComponent }, //clutter
]

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    HomeComponent,
    ActivityComponent,
    GalleryComponent,
    NoticeBoardComponent,
    SuggestionComponent,
    CurrentIssueComponent,
    PromotersComponent,
    ActiveComponent,
    PostComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
	  SocialLoginModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService,
				{
					provide: AuthServiceConfig,
					useFactory: getAuthServiceConfigs
				}],
  bootstrap: [AppComponent]
})
export class AppModule { }
