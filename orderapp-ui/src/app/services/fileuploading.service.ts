import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileuploadingService {

  private baseUrl = environment.baseUrl+"/api";

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  getAllTask():Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllTasks`);
  }
  getAllPhonesWithTaskID(taskId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/task/`+taskId);
  }

  deleteByTaskID(taskId:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/task/`+taskId);
  }
  
}


