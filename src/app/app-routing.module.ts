import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { MealsListComponent } from './components/meals-list/meals-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/meals-list', pathMatch: 'full' },
  { path: 'meals-list', component: MealsListComponent },
  { path: 'meal-details', component: MealDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }