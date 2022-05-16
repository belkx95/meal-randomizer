import { Component, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { meals } from 'src/app/interface/meals.interface';
import { meal } from 'src/app/interface/meal.interface';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss'],
})
export class MealsListComponent implements OnInit {

  meals: meal[] = [];
  page = 1;
  pageSize = 10;

  constructor(private http: HttpClient) {
    this.getRandomMeal().subscribe((data) => {
      console.log(data);
      data['meals'].forEach((element: meal) => {
        this.meals.push(element);
      });
    });
  }

  ngOnInit(): void {}

  getRandomMeal(): Observable<meals[]> {
    return this.http.get<[]>(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
  }
}
