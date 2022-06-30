import { Component } from '@angular/core';
import { HttpServiceService } from './services/http-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers:[
		HttpServiceService
	]
})
export class AppComponent {
	//loacl members of the class	
	title = 'httpRequestDemo';
	page:number = 1;
	pageSize:number = 10;
	arr:any=[];
	arrayLen:number=0;
	
	constructor(private httpService:HttpServiceService){}
	
	//fetch the data from the service which intern fetch the data from the api 
	fetchData(){
		let responseData:object =  this.httpService.jsonData;
		let {data:{stations}}:any = responseData;
		for(let eachEntry in stations){
			let {name,capacity}:any = stations[eachEntry];
			let arr1:any[] = [];
			arr1.push(name);
			this.arr.push(arr1);
		}
		this.arrayLen = this.arr.length;
		console.log(this.arr);
	}
}
