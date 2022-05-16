import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MealsListComponent } from './components/meals-list/meals-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealsListComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
