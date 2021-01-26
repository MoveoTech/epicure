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
  restaurantsForRestPage: Restaurant[] = []

  getRestaurants() {
    return this.http.get(`${environment.BASE_URL}/restaurants`)
  }

  getAllRestaurants(limit = 0) {
    return this.http.get(`${environment.BASE_URL}/restaurants?limit=${limit}`)
  }

  deleteRestaurant(_id) {
    return this.http.request('delete', `${environment.BASE_URL}/admin/restaurants/delete`, {
      headers: environment.loaclStorageHeader,
      body: { _id }
    })
  }

  addRestaurant(body) {
    return this.http.post(`${environment.BASE_URL}/admin/restaurants/add`, body, {
      headers: environment.loaclStorageHeader,
    })
  }
  editRestaurant(body) {
    return this.http.put(`${environment.BASE_URL}/admin/restaurants/edit`, body, {
      headers: environment.loaclStorageHeader,
    })
  }


}
