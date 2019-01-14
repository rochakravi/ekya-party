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
  PartyAgenda : boolean = false ;

  meeting =[
    {
      "invitee": "Satish SIngh",
      "attendee": "Ravi Raj",
      "inviteePhone": 8130962517,
      "attendeePhone": 9910568242,
      "summery": "Unity among people"
    },
    {
      "invitee": "Sanjeev Rajput",
      "attendee": "Bittu Singh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": "Employement"
    },
    {
      "invitee": "Imran Hassan",
      "attendee": "Sanjeev Singh",
      "inviteePhone": 7080501853,
      "attendeePhone": 8974039983,
      "summery": ""
    },
    {
      "invitee": "Rupak Singh",
      "attendee": "Sanjeev Singh",
      "inviteePhone": 9534343606,
      "attendeePhone": 8974039983,
      "summery": ""
    },
    {
      "invitee": "Shekhar Suman",
      "attendee": "Krishna Singh",
      "inviteePhone": 8910916239,
      "attendeePhone": 9506496936,
      "summery": ""
    },
    {
      "invitee": "Kishlay Pallav",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Deepak Mishra",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Trilok Kumar",
      "attendee": "Bittu SIngh",
      "inviteePhone": 7217862074,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sukhdev Singh",
      "attendee": "Sanjeev Singh",
      "inviteePhone": 7568197773,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Manoj Singh(Chiraiya Vidhayak)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Arun Singh(Balua)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sunil Singh(Vidhayak)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Manoj Singh(Patahi)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Mantosh Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Muneel Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Nankh Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Anik Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Rakesh Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Bikaw Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Manjesh Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Neeraj Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },,
    {
      "invitee": "Rahul Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Saurabh Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Gaurav Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Akhilesh Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Manoj Singh(Pax)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Kanhaiya Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Chunchun Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Virendra Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Gauri Shanker Singh(Gandhi jee)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Ram Ayodhya Singh(Saheb)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Vakeel Ahmed",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Lal Babu Singh ",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Ajay Singh(Vidhayak)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Kamlesh Singh(Pax Akhyaksh)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Suresh Singh(Jihuli)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Bam Bam Tiwari",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Jhunu Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Virendra Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Rajkishor Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Raj Mangal Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sunil Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Kaushal Rai",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Suresh Rai",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Raju Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Nanakh Rai",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "VIrendar Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Mani Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Ram Ashre Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Kanhaiya jee",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Anil Kumar singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Chanchal Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Pawan Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Rakesh Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Munna Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sree Babu",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Saroj Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Arvind Kumar Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Thulu Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Chunchun Singh(Chhatri Shangh Adhyaksh)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Manoj Singh(Pax Adhyaksh)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Manoj Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Munna Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Kanhaiya Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Vidhyachal Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Vijay Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Udhay Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Prabhat Kumar Singh(Chhatriye Yuva Ad)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Tuntun Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Jitender Rai",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Vijay Kumar Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sanjeev Kumar Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Tarkeshwar prasad",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Rupesh Prasad",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Om Prakash",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Jay Prakash",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Arun Prasad",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Mukesh Prasad(Ex Pramukh)",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Ram Pukar",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Om Prakash",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Mintu Prasad",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Mukesh Shah",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sumit Pandey",
      "attendee": "Sanjeev SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Golu Varma",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sangeet Varma",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Shushil Ram",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sathrudhan Baitha",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Vinod Kumar Sonu",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Dheeraj Kumar singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Awnish Kumar singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Sashi Kumar singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Madhurendra Pratap Singh",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Deepak",
      "attendee": "Goldu Kumar",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    },
    {
      "invitee": "Prabhakar Sharma",
      "attendee": "Bittu SIngh",
      "inviteePhone": 8974039983,
      "attendeePhone": 7004131348,
      "summery": ""
    }
  ]
  constructor(private api:ApiService, private router: Router, private ref: ChangeDetectorRef) {
	
  }

  ngOnInit() {
	  
	  this.getSuggestion();
  	

  }
  partyAgendaa(){
    this.PartyAgenda = !this.PartyAgenda
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
