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
	/**
	 * @param title - is the title to the project 
	*/	
	title = 'httpRequestDemo';
	/**
	 * @param rowPerPage - is the value to pageination tells how many entries per page
	 * @param page - is the initial page for paginataion
	*/
	rowPerPage = 10;
	page = 1;
	
	/**
	 * @param tableDataArr - is the array holds set of arrays of each entry represent each row
	 * @constructor - will set the http service variable
	 * @private @param httpService - is the http service variable
	 * @function fetchData - is the function which will make set of needed data for tables
	*/
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
