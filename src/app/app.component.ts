import { Component } from '@angular/core';
import { HostListener } from "@angular/core";
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  mobile : boolean = false ;

  constructor(private router:Router){   
      this.onResize();
      if(this.screenWidth<560){
        //alert(this.screenWidth);
        this.mobile = true ;
        this.router.navigate(['/login'])

      }    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
}
}
