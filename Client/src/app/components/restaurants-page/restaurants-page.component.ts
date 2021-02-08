import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/interfaces/restaurant.interfece';
import { Review } from 'src/app/interfaces/review.interface';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css']
})
export class RestaurantsPageComponent implements OnInit {

  constructor(
    public restaurantsService: RestaurantsService,
    private router: Router) { }
  restaurantsCategories = ['All', 'New', 'Most Popular', 'Active Now'];
  selectedItem: number = 0;
  selectedCategory: string = 'All';

  ngOnInit(): void {
    this.restaurantsService.getAllRestaurants(this.restaurantsService.restaurantLimit).subscribe(
      (res: { restaurants: Restaurant[], count: number }) => {
        this.restaurantsService.limitRestaurants = res.restaurants
        this.restaurantsService.restaurantPaginationCount = res.count
      },
      err => console.log(err)
    )
  };

  getMostPopular() {
    this.restaurantsService.getAllRestaurants(undefined, undefined, this.restaurantsService.popularityRate)
      .subscribe((res: { restaurants: Restaurant[], count: number }) => {
        this.restaurantsService.mostPupularRestaurants = res.restaurants
        this.restaurantsService.restaurantPaginationCount = res.count
      })
  };

  nextPage(e) {
    if (e.pageIndex === 0) {
      this.restaurantsService.getAllRestaurants(this.restaurantsService.restaurantLimit, 0).subscribe(
        (res: { restaurants: Restaurant[], count: number }) => {
          this.restaurantsService.limitRestaurants = res.restaurants
          this.restaurantsService.restaurantPaginationCount = res.count
        },
        err => console.log(err)
      )
    }
    if (e.pageIndex > 0) {
      const skip = e.pageIndex * this.restaurantsService.restaurantLimit
      this.restaurantsService.getAllRestaurants(this.restaurantsService.restaurantLimit, skip).subscribe(
        (res: { restaurants: Restaurant[], count: number }) => {
          this.restaurantsService.limitRestaurants = res.restaurants
          this.restaurantsService.restaurantPaginationCount = res.count
        },
        err => console.log(err)
      )
    }
  };

  changeCategory(e, i) {
    this.selectedCategory = e.target.innerHTML
    this.selectedItem = i
    if (this.selectedCategory === 'All') {
      this.restaurantsService.getAllRestaurants(this.restaurantsService.restaurantLimit).subscribe(
        (res: { restaurants: Restaurant[], count: number }) => {
          this.restaurantsService.limitRestaurants = res.restaurants
          this.restaurantsService.restaurantPaginationCount = res.count
        },
        err => console.log(err)
      )
    }
    else if (this.selectedCategory === 'Most Popular') {
      this.getMostPopular()
    }
  };

  getRestaurantReviews(restaurantId) {
    this.router.navigateByUrl(`restaurant_reviews/${restaurantId}`)
  }

}
