import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../interfaces/restaurant.interfece';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  allRestaurants: Restaurant[] = [];
  limitRestaurants: Restaurant[] = [];
  restaurantLimit: number = 9;
  mostPupularRestaurants: Restaurant[] = []
  popularityRate: number = 7
  restaurantPaginationCount: number

  getAllRestaurants(limit = 0, skip = 0, popularity = 0) {
    return this.http.get(`${environment.BASE_URL}/restaurants?limit=${limit}&skip=${skip}&popularity=${popularity}`)
  };

  deleteRestaurant(_id) {
    return this.http.request('delete', `${environment.BASE_URL}/admin/restaurants/delete`, {
      headers: environment.loaclStorageHeader(),
      body: { _id }
    })
  };

  addRestaurant(body) {
    return this.http.post(`${environment.BASE_URL}/admin/restaurants/add`, body, {
      headers: environment.loaclStorageHeader(),
    })
  };
  editRestaurant(body) {
    return this.http.put(`${environment.BASE_URL}/admin/restaurants/edit`, body, {
      headers: environment.loaclStorageHeader(),
    })
  };



}
