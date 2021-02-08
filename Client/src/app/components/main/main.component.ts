import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from 'src/app/interfaces/dish.interface';
import { Restaurant } from 'src/app/interfaces/restaurant.interfece';
import { DishesService } from 'src/app/services/dishes.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 2,
  };
  dishConfig: SwiperOptions = {};

  constructor(public restaurantsService: RestaurantsService, public dishesService: DishesService, public r: Router) { }

  resizeCarouselle(): void {

    if (window.innerWidth > 430) {
      this.config.width = null;
      this.config.slidesPerView = 1;
      this.dishConfig.slidesPerView = 1;
      this.dishConfig.width = null;
    }
    window.innerWidth > 1360 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2;
    window.innerWidth > 1360 ? this.config.spaceBetween = -5 : this.config.spaceBetween = 0;
    window.innerWidth > 1360 ? this.dishConfig.slidesPerView = 3 : this.dishConfig.slidesPerView = 2;
    if (window.innerWidth >= 560 && window.innerWidth < 960) {
      this.config.width = 555;
    }
    if (window.innerWidth <= 560) {
      this.config.width = 210;
      this.config.slidesPerView = 1;
      this.dishConfig.slidesPerView = 1;
      this.dishConfig.width = 260;
    }
    if (window.innerWidth > 560 && window.innerWidth < 960) {
      this.dishConfig.width = 555;
    }
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => this.resizeCarouselle());
    this.resizeCarouselle();

    this.restaurantsService.getAllRestaurants()
      .subscribe(
        (res: { restaurants: Restaurant[] }) => this.restaurantsService.allRestaurants = res.restaurants,
        (err) => console.log(err)
      );
    this.dishesService.getSignatureDishes().subscribe((res: Dish[]) => this.dishesService.dishes = res);
  }
}
