import {Component} from 'angular2/core';
import {HttpTestService} from './http.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Jsonp} from 'angular2/http';

// import {JsonPService} from './jsonp.service';

@Component({
	selector: 'http-test',
	template: `
				<button (click)="testGet()"> Test GET request </button><br>
				<p> Output: {{getData}}</p><br><br>
				<button (click) = "testSecureGet()">Test Secure GET request</button><br>
				<p> Output: {{secureGet}}</p>
				`,
	providers: [HTTP_PROVIDERS, HttpTestService]
})
export class HttpTestComponent {

	getData: string;
	secureGet: string;

	getDataViaJSONP: string;

	constructor(private httpTestService: HttpTestService){

	}

	testGet() {
		this.httpTestService.getCurrentTime()
			.subscribe(
				data => this.getData = JSON.stringify(data),
				error => alert(error),
				() => console.log("finished")
			);
	}

	testSecureGet() {
		this.httpTestService.authenticate({ username: "arvind", password: "test" })
			.subscribe(
			data => this.secureGet = JSON.stringify(data),
				error => alert(error),
				() => console.log("Finished")
			);
	}
	

	testGetViaJsonP() {
		// this.jsonp.request('https://restcountries.eu/rest/v1/name/India').subscribe(
		// 	data => this.getDataViaJSONP = JSON.stringify(data),
		// 	error => alert(error),
		// 	() => console.log("FINISHED")
		// 	);
	}

	testPOST() {

	}

}