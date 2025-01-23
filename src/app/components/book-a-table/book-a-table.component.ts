import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service'; // Adjust the import according to your project structure


@Component({
  selector: 'app-book-a-table',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,FormsModule],
  templateUrl: './book-a-table.component.html',
  styleUrl: './book-a-table.component.css'
})
export class BookATableComponent {
  bookingData = {
    name: '',
    phone: '',
    date: '',
    time: '',
    people: ''
  };


  // constructor(private apiService: ApiService,private http: HttpClient) {}

  // onSubmit(bookingForm: NgForm) {
  //   if (bookingForm.valid) {
  //     // Log the bookingData to check if it's populated correctly
  //     console.log('Form is valid, data to submit:', this.bookingData);

  //     // Proceed with the API call to store booking in the database
  //     this.apiService.bookTable(this.bookingData).subscribe(
  //       response => {
  //         console.log('Booking successfully submitted:', response);
  //         // Handle success (e.g., show a success message)
  //       },
  //       error => {
  //         console.error('Error submitting booking:', error);
  //         // Handle error (e.g., show an error message)
  //       }
  //     );
  //   } else {
  //     console.log('Form is invalid, cannot proceed.');
  //   }
  // }

    }


