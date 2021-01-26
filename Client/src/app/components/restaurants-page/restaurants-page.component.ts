import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant.interfece';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css']
})
export class RestaurantsPageComponent implements OnInit {

  constructor(public restaurantsService: RestaurantsService) { }
  restaurantsCategories = ['All', 'New', 'Most Popular', 'Active Now'];
  selectedItem: number = 0
  selectedCategory: string = 'All';

  ngOnInit(): void {
    this.restaurantsService.getAllRestaurants(this.restaurantsService.restaurantLimit).subscribe(
      (res: Restaurant[]) => this.restaurantsService.limitRestaurants = res,
      err => console.log(err)
    )
    this.restaurantsService.getAllRestaurants().subscribe(
      (res: Restaurant[]) => {
        this.restaurantsService.allRestaurants = res
        this.restaurantsService.mostPupularRestaurants = res.filter(rest => rest.popularity >= 7)
      },
      err => console.log(err)
    )
  };


  nextPage(e) {
    if (e.pageIndex === 0) {
      this.restaurantsService.getAllRestaurants(this.restaurantsService.restaurantLimit, 0).subscribe(
        (res: Restaurant[]) => this.restaurantsService.limitRestaurants = res,
        err => console.log(err)
      )
    }
    if (e.pageIndex > 0) {
      const skip = e.pageIndex * this.restaurantsService.restaurantLimit
      this.restaurantsService.getAllRestaurants(this.restaurantsService.restaurantLimit, skip).subscribe(
        (res: Restaurant[]) => this.restaurantsService.limitRestaurants = res,
        err => console.log(err)
      )
    }
  };

  changeCategory(e, i) {
    this.selectedCategory = e.target.innerHTML
    this.selectedItem = i
    if (this.selectedCategory === 'All') {
      this.restaurantsService.getAllRestaurants(this.restaurantsService.restaurantLimit).subscribe(
        (res: Restaurant[]) => this.restaurantsService.limitRestaurants = res,
        err => console.log(err)
      ) 
    }
  }

}
    // ----
    //  mail gun
    // form with 1 fiels - user can write comments - once he send - ill recive an email

// Read about JWT

// service variable for skip / limit √√√√

// ng class for active / etc.... √√√√