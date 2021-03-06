import { Injectable } from '@angular/core';
//import {Observable}     from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor (private http: HttpClient) {}

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8080/index";
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params, {withCredentials : true});
  }

  logout() {
     let url = "http://localhost:8080/logout";
     return this.http.get(url, { withCredentials: true });
   }

}
