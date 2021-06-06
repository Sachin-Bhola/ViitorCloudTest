import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from '../../model/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getALLProducts(): Observable<any> {
    return this.http.get(`${environment.apiBase}/products`);
  }

  getALLProductById(id: number): Observable<any> {
    return this.http.get(`${environment.apiBase}/products/${id}`);
  }

  addProduct(productDetails?: product): Observable<any> {
    return this.http.post(`${environment.apiBase}/products`, productDetails);
  }


}
