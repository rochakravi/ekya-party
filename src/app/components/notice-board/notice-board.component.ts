import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {

  leadersOfWeek =[
    {name:"Imran",title:"Activist",organisation:"",gmail:"",facebook:"",twitter:"",linkedin:"",contact:""},
    {name:"Kishan",title:"Activist",organisation:"",gmail:"",facebook:"",twitter:"",linkedin:"",contact:""},
    {name:"Rohan",title:"Promoter",organisation:"",gmail:"",facebook:"",twitter:"",linkedin:"",contact:""},
  ]
  screenWidth ;
  mobile : boolean = false ;
  constructor() {
    this.onResize();
    if(this.screenWidth<500){
      //alert(this.screenWidth);
      this.mobile = true ;

    }  
   }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
   // this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
}

}

