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

  getAllRestaurants() {
    return this.http.get(`${environment.BASE_URL}/restaurants?limit=0`)
  }

  deleteRestaurant(_id) {
    return this.http.request('delete', `${environment.BASE_URL}/admin/restaurants/delete`, {
      headers: { 'Authorization': localStorage.access_token },
      body: { _id }
    })
  }


}
