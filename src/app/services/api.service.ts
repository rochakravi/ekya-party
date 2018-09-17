import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from "rxjs/Observable" ;
//import 'rxjs/add/operator/map';

import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
	// testing api url --  https://api.myjson.com/bins/15vlhc

  constructor(private http : HttpClient) {
  }

  getData(): Observable<any>{
    //  return this.http.get('https://ekta-p.herokuapp.com/suggestions') //prod
      return this.http.get('https://ekta-pa-dev.herokuapp.com/suggestions') //dev
   
  }
  sendData(data){
  	console.log(data);
   // let url = 'https://ekta-p.herokuapp.com/suggestion' ; // prod
    let url = 'https://ekta-pa-dev.herokuapp.com/suggestion' ; // dev
  	return this.http.post(url, data)
  }

}
