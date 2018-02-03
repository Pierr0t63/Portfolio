import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit{
    msgContact: FormGroup;

	constructor(public navCtrl: NavController,
                private formCtc: FormBuilder,
                public alertCtrl: AlertController,
                public http: Http,
                public loadingCtrl: LoadingController) {

	}

    ngOnInit() {
       this.msgContact = this.formCtc.group({
            nom: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
            prenom: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
            addrMail: new FormControl('', [Validators.required, Validators.email]),
            tel: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
            raison: new FormControl('', [Validators.required]),
            sujet: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
            msguser: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(500)])
        });

    }

    onSubmit(){ 
        let loading = this.loadingCtrl.create({
            content: "Chargement ..."
        });
        loading.present();     
        this.http.post('https://www.aformac-vichy-app6.ovh/api/sendmail?api_token=qaTQ01WaLvHehLoTvEnW9lcHYNCZANU3r4rmVmWppnvyaNgsjKYDhZ8BX124', JSON.stringify(this.msgContact.value)).subscribe(
            data => {
                let alertSuccess = this.alertCtrl.create({
                    title: 'Message envoyé !',
                    subTitle: 'Merci d\'avoir pris le temps de m\'écrire.',
                    buttons: ['OK']
                });

                this.msgContact.reset();
                loading.dismiss();
                alertSuccess.present();

            },
            error => {
                let alertSuccess = this.alertCtrl.create({
                    title: 'Oops !',
                    subTitle: 'Il semblerait qu\'un problème soit survenu lors de l\'envoi. Veuillez réessayer ultérieurement ou me contacter directement à kozluk.pierre(at)gmail(dot)com.',
                    buttons: ['OK']
                });
                loading.dismiss();
                alertSuccess.present();
            }
        );
    }
}

