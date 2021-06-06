import { Injectable } from '@angular/core';

export interface Token {
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(res: Token) {
    localStorage.setItem('token', res.token);
  }

}
