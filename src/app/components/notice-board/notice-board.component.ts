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

  content : {}={
    "agenda" : [
    {name:"unity",title:"Step towards humanity with unity"},
    {name:"equality",title:"Attempt to achieve equality"},
    {name:"problem",title:"Attention on common problem"},
    {name:"manipulation",title:"dismissal of manipulation based on cast and religion."},
    {name:"leadership",title:"Transformation of Indian political leadership."},
    {name:"observation",title:"Approval on observation by people on their elected leaders(MP/MLA)."},
    {name:"bussiness",title:"Local business promotion, motivation to entrepreneurs and elevation to employment"},
    {name:"skill",title:"Promotion to Skill development in all the sectors."},
    {name:"education",title:"Free education"},
    {name:"promote",title:"Special attention to economically undeveloped people"},
    ]

     
  }
    
  agenda ;

  

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
    this.url = '../assets/'+'pranav.jpg' ;
    this.agenda = this.content['agenda'];
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

