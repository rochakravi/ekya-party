import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service' ;
import {Router} from '@angular/router' ;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	subject ;
	description ;
	socialImage ;
  constructor(private api : ApiService, private router : Router) { }

  ngOnInit() {
	  this.socialImage = JSON.parse(sessionStorage.getItem("userInfo")).image ;
  }
  addSuggetion(){
  	let subject = this.subject ;
		let description = this.description ;
		let socialName = JSON.parse(sessionStorage.getItem("userInfo")).name ;
    let socialPic = JSON.parse(sessionStorage.getItem("userInfo")).image ;
		
  	let data ={ 
  		"suggsestion_subject": subject ,
			"suggsestion_description": description,
			"social_name" : socialName,
			"social_pic" : socialPic
  	}  
  	this.subject = "" ;
  	this.description = "" ;
  	this.api.sendData(data).subscribe(
  			response =>{
					//this.showSuccess();  				
  			})
  	this.router.navigate(['/home'])
  }

}
