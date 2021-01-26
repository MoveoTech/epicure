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

  ngOnInit(): void {
    this.restaurantsService.getAllRestaurants(9).subscribe(
      (res: Restaurant[]) => this.restaurantsService.limitRestaurants = res,
      err => console.log(err)
    )
    this.restaurantsService.getAllRestaurants().subscribe(
      (res: Restaurant[]) => this.restaurantsService.allRestaurants = res,
      err => console.log(err)
    )
  }

  nextPage(e) {
    if (e.pageIndex === 0) {
      this.restaurantsService.getAllRestaurants(9, 0).subscribe(
        (res: Restaurant[]) => this.restaurantsService.limitRestaurants = res,
        err => console.log(err)
      )
    }
    if (e.pageIndex > 0) {
      const skip = e.pageIndex * 9
      this.restaurantsService.getAllRestaurants(9, skip).subscribe(
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

// service variable for skip / limit

// ng class for active / etc....