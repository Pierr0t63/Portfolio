import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    private trainings = '';
    private skills = '';
    constructor(public navCtrl: NavController, public http: Http) {
        http.get('https://www.aformac-vichy-app6.ovh/api/trainings?api_token=qaTQ01WaLvHehLoTvEnW9lcHYNCZANU3r4rmVmWppnvyaNgsjKYDhZ8BX124').subscribe(trainings => { this.trainings = trainings.json()});
        http.get('https://www.aformac-vichy-app6.ovh/api/skills?api_token=qaTQ01WaLvHehLoTvEnW9lcHYNCZANU3r4rmVmWppnvyaNgsjKYDhZ8BX124').subscribe(skills => { this.skills = skills.json()});    
    }

}
