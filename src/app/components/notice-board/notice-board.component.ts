import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {

  url
  first :boolean=false ;
  second :boolean=false ;

  leadersOfWeek =[
    {name:"Imran",title:"Activist",image:"../assets/pranav.jpg",organisation:"",gmail:"",facebook:"https://www.facebook.com/pranav.bhardwaj.5",twitter:"",linkedin:"",contact:""},
    {name:"Kishan",title:"Activist",image:"../assets/rabhusan.jpg",organisation:"",gmail:"",facebook:"https://www.facebook.com/ravibhusan.kumar.77",twitter:"",linkedin:"",contact:""},
    {name:"Rohan",title:"Promoter",image:"../assets/chandra.jpg",organisation:"",gmail:"",facebook:"https://www.facebook.com/profile.php?id=100007495692564",twitter:"",linkedin:"",contact:""},
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
    //this.url = '../assets/'+'pranav.jpg'
  }
  detailsFirst(){
    //this.second = !this.second ;
    this.first = !this.first ;
   
  }
  detailsSecond(){
    // this.first = !this.first ;
    this.second = !this.second ;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
   // this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
}



}

