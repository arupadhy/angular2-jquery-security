import {Injectable} from 'angular2/core';
import {Jsonp} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


/**
	This uses jsonp to get data from multiple servers on diff domain
**/
@Injectable()
export class JsonPService {

	 URL: string = "http://localhost:8080/api/books";

	 constructor(private jsonp: Jsonp){
		 console.log("JsonPService called");
	 }

	 getBooks():Observable<any> {
		 console.log("getBooks() service called");
		 return this.jsonp.get(this.URL).map(res => res.json());
	 }

}