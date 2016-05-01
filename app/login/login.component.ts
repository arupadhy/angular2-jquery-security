import {Component} from 'angular2/core';
import {ElementRef} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {LoginService} from './login.service';
declare var $: any;


@Component({
	selector: 'my-login',
	templateUrl: 'app/login/login.component.html',
	styleUrls: ['app/login/login.component.css'],
	providers: [LoginService]
})
export class LoginComponent implements OnInit{
	user: any;
	constructor(private elRef:ElementRef,private loginService:LoginService){
		this.user = {};
	}

	public authenticate(user) {
		console.log(user);
	}

	public ngOnInit() {
		$('#login').dialog({
			autoOpen: false,
			height: 300,
			width: 350,
			modal: true,
			show: {
				effect: "blind",
				duration: 1000
			},
			hide: {
				effect: "explode",
				duration: 1000
			}
		});
		$(this.elRef.nativeElement).find('button').on('click',function() {
			$('#login').dialog('open');
		})
	}
}