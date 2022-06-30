import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

	//this is the base URL
	baseUrl:string = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
	
	//the constructor will create the http access
	constructor(private http:HttpClient) {
		this.getDataFun();
	}
	jsonData:any;
	getDataFun(){
		//this is get request will return the data as observable
		this.http.get(
			this.baseUrl,
			{
				responseType:"json",
			}
		)
		//we can't get the data directly we have to set subscribe
		//subscribe will give 3 callbackas next()[where the response will be there] error() complete() this is called when observer ends
		.subscribe(
			//Below function is the next() call back to the subscribe
			(response:any)=>{
				this.jsonData = response;
			},
			//this is error() callback to subscribe
			(error:any)=>{
				console.log('Http Error: '+error);
			},
			//this is complete() callback to the subscribe
			()=>{
				console.log('request completed')
			}
		)
	}
}
