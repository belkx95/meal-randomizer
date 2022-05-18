import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { meals } from '../interface/meals.interface';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }


  getRandomMeal(): Observable<meals[]> {
    return this.http.get<[]>(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    )
  }

}
