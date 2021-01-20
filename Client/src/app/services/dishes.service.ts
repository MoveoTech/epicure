import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dish } from '../interfaces/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private http: HttpClient) { }

  dishes: Dish[] = []

  getSignatureDishes() {
    return this.http.get(`${environment.BASE_URL}/dishes/signature`)
  }

}
