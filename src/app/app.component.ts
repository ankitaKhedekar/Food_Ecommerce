import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-ecommerce';

  constructor(private router: Router) {}  // Inject the Router

  // onBookTableClick(): void {
  //   this.router.navigate(['/book-a-table']);  // Programmatically navigate to the book-a-table route
  // }
}
