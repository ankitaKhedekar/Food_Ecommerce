import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service'; // Import the service

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  // constructor(private contactService: ContactService) {}

  // onSubmit(form: any): void {
  //   if (form.valid) {
  //     this.contactService.submitContact(this.contactData).subscribe(
  //       response => {
  //         console.log('Success:', response);
  //         // Optionally reset the form
  //         this.contactData = { name: '', email: '', subject: '', message: '' };
  //       },
  //       error => {
  //         console.error('Error:', error);
  //       }
  //     );
  //   }
  // }
}
