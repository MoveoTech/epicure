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

  ngOnInit(): void {
    window.innerWidth < 960 ? this.config.slidesPerView = 2 : this.config.slidesPerView = 3
    // window.innerWidth > 1160 ? this.config.width = 700 : null
    if (window.innerWidth > 960) {
      this.config.width = 700
    }
    if(window.innerWidth < 960){
      this.config.width = 300
    }
  }

}
