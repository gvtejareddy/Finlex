import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = environment.baseUrl + "/person";

  constructor(private http: HttpClient) {


  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  
  save(person: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, person);
  }
}
