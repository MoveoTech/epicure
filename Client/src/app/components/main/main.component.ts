import { Component, OnInit } from '@angular/core';
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
  }
  dishConfig: SwiperOptions = {
    // width : 530
  }

  constructor(public restaurantsService: RestaurantsService) { }

  spaceDescription = `Polenta Fingers, Veal Cheek, Magic Chili, Cured Lemon Cream & Yellow Laksa`

  resizeCarouselle() {

    if (window.innerWidth > 430) {
      this.config.width = null
      this.config.slidesPerView = 1
      this.dishConfig.slidesPerView = 1
      this.dishConfig.width = null;
    }
    window.innerWidth > 1360 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2;
    window.innerWidth > 1360 ? this.config.spaceBetween = -5 : this.config.spaceBetween = 0;
    window.innerWidth > 1360 ? this.dishConfig.slidesPerView = 3 : this.dishConfig.slidesPerView = 2;
    if (window.innerWidth >= 560 && window.innerWidth < 960) {
      this.config.width = 555
    }
    if (window.innerWidth <= 560) {
      this.config.width = 210
      this.config.slidesPerView = 1
      this.dishConfig.slidesPerView = 1
      this.dishConfig.width = 260;
    }
    if (window.innerWidth > 560 && window.innerWidth < 960) {
      this.dishConfig.width = 555
    }
  }

  ngOnInit(): void {
    this.resizeCarouselle()
    this.restaurantsService.getRestaurants()
      .subscribe(
        (res: any) => this.restaurantsService.restaurants = res,
        (err) => console.log(err)
      )
    window.addEventListener('resize', () => this.resizeCarouselle())
  }

}




// if (window.innerWidth > 560 && window.innerWidth < 960) {
//   this.dishConfig.width = 555
//   this.config.width = 555
// }
// window.innerWidth > 1360 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2;
// window.innerWidth > 1360 ? this.config.spaceBetween = -5 : this.config.spaceBetween = 0;
// window.innerWidth > 1360 ? this.dishConfig.slidesPerView = 3 : this.dishConfig.slidesPerView = 2;
// if (window.innerWidth <= 560) {
//   this.config.width = 210
//   this.config.slidesPerView = 1
//   this.dishConfig.slidesPerView = 1
//   this.dishConfig.width = 260;
// }