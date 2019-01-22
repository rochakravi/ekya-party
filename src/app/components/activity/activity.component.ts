import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  show : boolean = false ;

  constructor() { }

  ngOnInit() {
  }
  showSection(){
    this.show = !this.show ;
  }

}
