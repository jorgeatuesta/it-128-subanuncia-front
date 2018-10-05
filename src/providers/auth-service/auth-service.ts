import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register, User } from '../../models';
import { URL_SERVICIOS } from '../../config/config';


@Injectable()
export class AuthServiceProvider {



  constructor(public http: HttpClient) {
  }

  register(register : Register){
    let headers = new HttpHeaders(
      {
      'Content-Type': 'application/json'
      });
      const options = { headers: headers };
      let json = JSON.stringify(register);
      let completeUrl=URL_SERVICIOS + '/users.json' ;
      return this.http.post(completeUrl, json, options);
  }

  login (user : User){

  }

}
