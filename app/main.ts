import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {JSONP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [JSONP_PROVIDERS]);

