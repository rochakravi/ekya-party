import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { MembersComponent } from './components/members/members.component';
import { HomeComponent } from './components/home/home.component';
import { ActivityComponent } from './components/activity/activity.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';


import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes : Routes = [
  {path :'home', component:HomeComponent},
  {path :'members', component:MembersComponent},
  {path :'activity', component:ActivityComponent},
  {path :'gallery', component:GalleryComponent},
  {path :'notice-board', component:NoticeBoardComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    HomeComponent,
    ActivityComponent,
    GalleryComponent,
    NoticeBoardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
