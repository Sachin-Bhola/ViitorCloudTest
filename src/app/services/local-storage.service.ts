import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token:string) {
    localStorage.setItem('token',token);
  }

}
