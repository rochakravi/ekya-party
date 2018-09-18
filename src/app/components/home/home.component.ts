import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  dontShow : boolean = false ;

  constructor(private api:ApiService, private router: Router, private ref: ChangeDetectorRef) {
	
  }

  ngOnInit() {
	  
	  this.getSuggestion();
  	

  }
  
  getSuggestion(){
	let Time =  Date().split(' ') ;
	//let day
	  
	this.api.getData().subscribe(
  		response => {
  			this.reverseResponse = response ;
        this.suggestions = this.reverseResponse.reverse(); 
		this.ref.detectChanges();
        console.log(this.suggestions);
  		})
  }

  postSuggestion(){
    //this.router.navigate[('/notice-board')]
    this.router.navigate(['/post']);
  }

  showIdeology(){
	this.dontShow = true ;  
  }
  closeIdeology(){
	this.dontShow = false ;    
  }

}
