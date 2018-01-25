import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-real',
  templateUrl: 'real.html'
})
export class RealPage {

	private data = '';
	constructor(public navCtrl: NavController, public http: Http) {
		http.get('https://www.aformac-vichy-app6.ovh/api/projects?api_token=qaTQ01WaLvHehLoTvEnW9lcHYNCZANU3r4rmVmWppnvyaNgsjKYDhZ8BX124').subscribe(data => { this.data = data.json()});
	}
}
