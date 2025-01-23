import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact'; // Adjust the URL if necessary

  constructor(private http: HttpClient) {}

  submitContact(contactData: any): Observable<any> {
    console.log("contactData",contactData)
    return this.http.post(this.apiUrl, contactData);
  }
}
