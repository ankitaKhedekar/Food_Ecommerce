import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}

  activeButton: string = 'all'; // Default active button



  setActive(button: string) {
    this.activeButton = button; // Set the active button based on user selection
  }

  // navigateToDrinks(drink: string) {
  //   if (drink === 'Martinez Cocktail' || drink === 'Mint Lemonade') {
  //     this.router.navigate(['menu/drinks']);
  //   }
  // }
  navigateToMenu(item: string) {
    if (item === 'Martinez Cocktail' || item === 'Mint Lemonade') {
      this.router.navigate(['/menu/drinks']); // Navigate to drinks page
    } else if (item === 'Butterscotch Cake' || item === 'Chocolate Icecream' || item === 'Classic Waffles') {
      this.router.navigate(['/menu/desserts']); // Navigate to desserts page
    } else if (item === 'Hawaiian Pizza' || item === 'Cheese Burger') {
      this.router.navigate(['/menu/breakfast']); // Navigate to breakfast page
    } else {
      this.router.navigate(['/menu/all']); // Default to /menu/all
    }
  }
}
