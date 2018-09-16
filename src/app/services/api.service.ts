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
  		return this.http.get('http://localhost:8080/suggetions') //.map(response => response.json());

  }
  sendData(data){
  	console.log(data);
  	let url = 'http://localhost:8080/suggetion' ;
  	return this.http.post(url, data)
  }

}
