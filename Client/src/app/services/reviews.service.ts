import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Review } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  restaurantReviews: Review[]

  getReviews(restaurant) {
    return this.http.get(`${environment.BASE_URL}/reviews?restaurant=${restaurant}`)
  }

  addReview(body) {
    return this.http.post(`${environment.BASE_URL}/reviews/add`, body, {
      headers: environment.loaclStorageHeader()
    })
  }

}
