
import {Injectable} from 'angular2/core';
import {Http, Response, RequestOptions,Request,RequestMethod} from 'angular2/http';
import {Headers} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
/**
	This uses observables to get data over http from a remote server.
**/

@Injectable()
export class HttpTestService {

	constructor(private _http:Http) {

	}

	private extractData(res: Response) {
		console.log(res);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		let body = res.json();
		console.log(body);
		console.log(body.data);
		return body.data || {};
	}

	authenticate(user) {
		var headers = new Headers();
		headers.append('Authorization', 'Basic YXJ2aW5kOnRlc3Q=');
		headers.append('X-Requested-With', 'XMLHttpRequest');
		headers.append('Access-Control-Allow-Origin','*');
		var options = new RequestOptions({
			method: RequestMethod.Get,
			url: 'http://localhost:8080/secure/api/books',
			headers: headers
		});
		var req = new Request(options);
		//headers.append('Content-Type', 'application/x-www-form-urlencoded');
		// headers.append('Content-Type', 'application/x-www-form-urlencoded');
		//headers.append('X-Requested-With', 'XMLHttpRequest');
		return this._http.request(req)
		.map(res=>res.json()).catch(this.handleError);
	}


	getCurrentTime():any {
		return this._http.get('http://localhost:8080/api/books')
			.map(res=>res.json())
			.catch(this.handleError);
	} 

	private handleError(error: any) {
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}

	postJSON() {

	}
}