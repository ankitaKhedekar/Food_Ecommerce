import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}


  navigateToCatering() {
    this.router.navigate(['/catering']);
  }
  navigateToBirthday() {
    this.router.navigate(['/birthday']);
  } 
   navigateToWedding() {
    this.router.navigate(['/wedding']);
  } 
   navigateToEvent() {
    this.router.navigate(['/event']);
  }
}
