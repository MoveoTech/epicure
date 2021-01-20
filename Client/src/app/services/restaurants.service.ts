import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  restaurants: [] = []

  getRestaurants() {
    return this.http.get(`${environment.BASE_URL}/restaurants`)
  }


}
