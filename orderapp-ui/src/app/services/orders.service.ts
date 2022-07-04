import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrl = environment.baseUrl + "/order";

  constructor(private http: HttpClient) {


  }
  getOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getOrderByEmailId(emailid: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/find/`+emailid);
  }

  
  
  save(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, order);
  }
}
