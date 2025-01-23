import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-content-details',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,FormsModule],
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.css'
})

export class ContentDetailsComponent implements OnInit {
  contentId: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Extract the 'id' from the route and check if it's not null
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.contentId = +id; // Safely convert to number
    } else {
      console.error("No content ID found in the route");
      // Handle the case where 'id' is null
    }
  }
}
