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
	// table variables
	showRow = true;
	rowPerPage = 100;
	page = 1;
	
  //table matrix [array] data
	tableDataArr:any[] = [];
	constructor(private httpService:HttpServiceService){}
	
	//fetch the data from the service which intern fetch the data from the api 
	fetchData(){
		let responseData:object =  this.httpService.jsonData;
		let {data:{stations}}:any = responseData;
		for(let eachVal in stations)
		{
			let arr:[string,number][] = []
			arr.push(stations[eachVal].name);
			arr.push(stations[eachVal].capacity);
			arr.push(stations[eachVal].station_id);
			this.tableDataArr.push(arr);
		}
	}
}
