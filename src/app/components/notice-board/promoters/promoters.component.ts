import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html',
  styleUrls: ['./promoters.component.css']
})
export class PromotersComponent implements OnInit {
	leadersOfWeek =[
    {name:"Imran",title:"Activist",image:"../assets/pranav.jpg",organisation:"",gmail:"",facebook:"https://www.facebook.com/pranav.bhardwaj.5",twitter:"",linkedin:"",contact:""},
    {name:"Kishan",title:"Activist",image:"../assets/rabhusan.jpg",organisation:"",gmail:"",facebook:"https://www.facebook.com/ravibhusan.kumar.77",twitter:"",linkedin:"",contact:""},
    {name:"Rohan",title:"Promoter",image:"../assets/chandra.jpg",organisation:"",gmail:"",facebook:"https://www.facebook.com/profile.php?id=100007495692564",twitter:"",linkedin:"",contact:""},
  ]

  constructor() { }

  ngOnInit() {
  }

}
