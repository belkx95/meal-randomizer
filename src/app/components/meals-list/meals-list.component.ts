import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { meals } from 'src/app/interface/meals.interface';
import { meal } from 'src/app/interface/meal.interface';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss'],
})
export class MealsListComponent implements OnInit {

  meals: meal[] = [];
  page = 1;
  pageSize = 10;

  constructor(private mealService:MealService) {
    for (let i = 0; i < 11; i++) {
      this.getRandomMeal();
    }
  }

  ngOnInit(): void {}

  getRandomMeal() {
    this.mealService.getRandomMeal().subscribe((data) => {
      console.log(data['meals'][0]);
      // data['meals'].forEach((element: meal) => {
      //   this.meals.push(element);
      // });
      this.meals.push(data['meals'][0])
    });
  }
}
