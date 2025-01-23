import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';  // Import throwError here
import { catchError } from 'rxjs/operators'; // Import catchError here
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api'; // Your API base URL

  constructor(private http: HttpClient) {}

  bookTable(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/book`, data).pipe(
      catchError((error) => {
        console.error('Error occurred while booking a table:', error);
        return throwError(() => new Error('Error occurred while booking a table'));
      })
    );
  }
  

  sendContact(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, data);
  }
}
