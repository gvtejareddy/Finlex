import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.baseUrl + "/product";

  constructor(private http: HttpClient) {


  }
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  
  save(person: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, person);
  }
}
