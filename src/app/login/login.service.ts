import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginCredential } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginDetails: loginCredential): Observable<any> {
    return this.http.post(`${environment.apiBase}/auth/login`, loginDetails);
  }

}
