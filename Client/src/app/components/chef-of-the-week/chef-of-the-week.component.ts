import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-chef-of-the-week',
  templateUrl: './chef-of-the-week.component.html',
  styleUrls: ['./chef-of-the-week.component.css']
})
export class ChefOfTheWeekComponent implements OnInit {

  constructor() { }

  config: SwiperOptions = {
    spaceBetween: 0,
    // width: 700
  }

  resizeCarouselle() {
    if (window.innerWidth > 960) {
      this.config.slidesPerView = 3
      this.config.width = 700
    }
    if (window.innerWidth < 960) {
      this.config.width = 800
      this.config.slidesPerView = 3
    }
    if (window.innerWidth < 860) {
      this.config.width = 500
      this.config.slidesPerView = 2
    }
    if (window.innerWidth < 700) {
      this.config.width = 300
      this.config.slidesPerView = 1
      console.log('called')
    }
  }

  ngOnInit(): void {
    window.innerWidth < 960 ? this.config.slidesPerView = 2 : this.config.slidesPerView = 3
    if (window.innerWidth > 960) {
      this.config.width = 700
    }
    if (window.innerWidth < 960) {
      this.config.width = 800
      this.config.slidesPerView = 3
    }
    if (window.innerWidth < 860) {
      this.config.width = 600
      this.config.slidesPerView = 2
    }
    if (window.innerWidth < 700) {
      this.config.width = 300
      this.config.slidesPerView = 1
    }
    window.addEventListener('resize', () => this.resizeCarouselle())
  }

}
