import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register, User } from '../../models';
import { URL_SERVICES } from '../../config/config';


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
      let completeUrl=URL_SERVICES + '/users.json' ;
      return this.http.post(completeUrl, json, options);
  }

  login (user : User){
    let url = URL_SERVICES +   '/authentication_tokens/create';
    let httpOptions = {
        headers: new HttpHeaders({
            'enctype': 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA'
        })
    };
    
    let formData = new FormData();
    formData.append('email',user.email);
    formData.append('password',user.password);
    console.log(formData);
    
    return this.http.post(url, formData,  httpOptions  );
  }

}
