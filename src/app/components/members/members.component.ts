import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { MembersData } from './membersData';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

 membersData = MembersData;
  constructor() { }

  ngOnInit() {
   
  }
  
}
