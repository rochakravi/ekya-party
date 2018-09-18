import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service' ;
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reverseResponse ;
  suggestions ;
  socialName ;
  socialPic ;
  ideology :boolean = false ;

  constructor(private api:ApiService, private router: Router) { }

  ngOnInit() {
   //  this.socialName = JSON.parse(sessionStorage.getItem("userInfo")).name ;
   //  this.socialPic = JSON.parse(sessionStorage.getItem("userInfo")).image ;
  	 this.api.getData().subscribe(
  		response => {
        this.reverseResponse = response ;
        
        this.suggestions = this.reverseResponse.reverse(); ;
        console.log(this.suggestions);
  		})

  }

  postSuggestion(){
    //this.router.navigate[('/notice-board')]
    this.router.navigate(['/notice-board/suggestion']);
  }
  showIdeology(){
    this.ideology = !this.ideology ;
  }
  closeIdeology(){
    this.ideology = !this.ideology ;
  }


}
