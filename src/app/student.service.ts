import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getStudents(limit: number = 10, skip: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/students?limit=${limit}&skip=${skip}`);
  }

  getStudent(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/${id}`);
  }

  createStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/student`, student);
  }

  updateStudent(id: string, student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/student/${id}`, student);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/student/${id}`);
  }
}
