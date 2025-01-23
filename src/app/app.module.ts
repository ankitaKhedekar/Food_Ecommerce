import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component'; // Import your components
import { MenuComponent } from './menu/menu.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';
import { BookATableComponent } from './components/book-a-table.component';
import { FormsModule } from '@angular/forms'; 
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
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Import this module

// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';





const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book-a-table', component: BookATableComponent },
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




];

@NgModule({
  declarations: [
    HttpClient,
    AppComponent,
    AboutComponent,
    MenuComponent,
    PagesComponent,
    ContactComponent,  
    BookATableComponent, 
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule, // Required for currency pipe and other common Angular directives
    RouterModule.forRoot(appRoutes) // Apply the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
