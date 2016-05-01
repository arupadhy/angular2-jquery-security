import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router'
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {HttpTestComponent} from './http/test.component';
import {Jsonp, JSONP_PROVIDERS} from 'angular2/http';



@Component({
	selector: 'my-app',
	templateUrl: '/app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES,LoginComponent,HttpTestComponent],
	providers: [ROUTER_PROVIDERS,JSONP_PROVIDERS]
})
@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: DashboardComponent,
		useAsDefault: true

	}
])
export class AppComponent {

	openLoginDialog() {
		console.log("show login form now");
	}
}