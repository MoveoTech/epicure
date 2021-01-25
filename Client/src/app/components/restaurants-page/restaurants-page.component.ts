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
      (res: Restaurant[]) => this.restaurantsService.restaurantsForRestPage = res
    )
  }

}
