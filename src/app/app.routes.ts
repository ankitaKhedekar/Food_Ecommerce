// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { PagesComponent } from './components/pages/pages.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookATableComponent } from './components/book-a-table/book-a-table.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { CateringComponent } from './catering/catering.component'; // Adjust the import as needed
import { BirthdayComponent } from './birthday/birthday.component'; // Adjust the import as needed
import { WeddingComponent } from './wedding/wedding.component'; // Adjust the import as needed
import { EventComponent } from './event/event.component'; // Adjust the import as needed
import { AllComponent } from './menu/all/all.component'; // Import AllComponent
import { BreakfastComponent } from './menu/breakfast/breakfast.component'; // Import BreakfastComponent
import { MainDishesComponent } from './menu/main-dishes/main-dishes.component'; // Import MainDishesComponent
import { DrinksComponent } from './menu/drinks/drinks.component'; // Import DrinksComponent
import { DessertsComponent } from './menu/desserts/desserts.component'; // Import DessertsComponent
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'contact', component: ContactComponent },
  {path : 'book-a-table',component:BookATableComponent},
  { path: 'content-details/:id', component: ContentDetailsComponent }, // Route for content details
  { path: 'catering', component: CateringComponent },
  { path: 'birthday', component:BirthdayComponent},
  { path: 'wedding', component:WeddingComponent},
  { path: 'event', component:EventComponent},
  { path: 'menu/all', component: AllComponent },
  { path: 'menu/breakfast', component: BreakfastComponent },
  { path: 'menu/main-dishes', component: MainDishesComponent },
  { path: 'menu/drinks', component: DrinksComponent },
  { path: 'menu/desserts', component: DessertsComponent },
  { path: '', redirectTo: '/menu/all', pathMatch: 'full' } // Redirect to All by default


]

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
