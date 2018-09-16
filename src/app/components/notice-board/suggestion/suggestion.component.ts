import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service' ;
import {Router} from '@angular/router' ;
@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
	subject = "" ;
	description = "" ;

  constructor(private api : ApiService, private router : Router) { }

  ngOnInit() {
  }
  addSuggetion(){
  	let subject = this.subject ;
  	let description = this.description ;
  	let data ={ 
  		"suggsestion_subject": subject ,
        "suggsestion_description": description
  	}
  	console.log(data);
  	this.subject = "" ;
  	this.description = "" ;
  	this.api.sendData(data).subscribe(
  			response =>{
  				console.log(response);
  			})
  	this.router.navigate(['home'])
  }


}
