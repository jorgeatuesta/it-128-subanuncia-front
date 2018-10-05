import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers';
import { User, Register } from '../../models';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  createSuccess = false;
  user : User ;
  reg : Register = new Register();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private auth : AuthServiceProvider,
              private alertCtrl : AlertController) {
  }

  public register() {
    this.auth.register(this.reg).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Cuenta creada.");
      } else {
        this.showPopup("Error", "Hubo un problema al crear la cuenta.");
      }
    },
    error => {
        this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
