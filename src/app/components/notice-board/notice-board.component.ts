import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}

