import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:2222/Emanage/api/event';
  constructor(private http: HttpClient) {
    
   }
   getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  

  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getById(id:number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  

  getEventByStatus(status:any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/byStatus/${status}`);
  }

}
