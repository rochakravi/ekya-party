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

  constructor(private api:ApiService, private router: Router) { }

  ngOnInit() {
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


}
