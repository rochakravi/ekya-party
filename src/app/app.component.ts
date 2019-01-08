import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    // '(document:keydown)': 'handleKeyboardEvent($event)',
    '(window:resize)': 'onResize()'
  }

})
export class AppComponent {
  title = 'app';
  navLinks = [
    {path:"/home", name:"Home"},
    {path:"/members", name:"Members"},
    {path:"/activity", name:"Activity"},
    {path:"/gallery", name:"Gallery"},   
  ]
  screenHeight ;
  screenWidth ;
  deviceHeight ;
  mobile : boolean = false ;

  constructor(){   
      this.onResize();
      if(this.screenWidth<560){
        //alert(this.screenWidth);
        this.mobile = true ;

      }    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    //alert(this.screenHeight);
    this.deviceHeight=this.screenHeight-94 ;
    this.screenWidth = window.innerWidth;
}
}
