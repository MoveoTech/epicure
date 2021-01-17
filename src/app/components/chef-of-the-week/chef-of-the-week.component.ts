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
  }

  ngOnInit(): void {
    window.innerWidth > 1160 ? this.config.slidesPerView = 2 : this.config.slidesPerView = 1
    window.innerWidth > 1160 ? null : this.config.spaceBetween = 15
    window.innerWidth > 1160 ? null : this.config.width = 235
  }

}
