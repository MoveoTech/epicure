import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../interfaces/restaurant.interfece';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  restaurants: Restaurant[] = []

  getRestaurants() {
    return this.http.get(`${environment.BASE_URL}/restaurants`)
  }


}
