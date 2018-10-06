import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { SignUpPage } from '../sign-up/sign-up';
import { AuthServiceProvider } from '../../providers';
import { User } from '../../models';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials: FormGroup;
  user : User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private auth : AuthServiceProvider) {
    this.credentials = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });
  }

  login() {
    this.user = new User();
    this.user.email = (this.credentials.get('email').value);
    this.user.password = (this.credentials.get('password').value);
    this.auth.login(this.user).subscribe( data =>{
      console.log(data);
    } );
    //this.navCtrl.setRoot(HomePage);
  }

  goSignUp() {
    this.navCtrl.push(SignUpPage);
  }
}
