import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {

    window.innerWidth > 1160 ? this.config.slidesPerView = 2 : this.config.slidesPerView = 1
    window.innerWidth > 1160 ? null : this.config.spaceBetween = 15
    window.innerWidth > 1160 ? null : this.config.width = 235
  }

}
