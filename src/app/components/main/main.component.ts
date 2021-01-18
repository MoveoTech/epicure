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
  dishConfig: SwiperOptions = {
    // width : 530
  }

  constructor() { }

  spaceDescription = `Polenta fingers, veal cheek,
 magic chili cured lemon cream, yellow laksa`

  test() {
    if (window.innerWidth > 430) {
      this.config.width = null
      this.config.slidesPerView = 1
      this.dishConfig.slidesPerView = 1
      this.dishConfig.width = null;
    }
    window.innerWidth > 1360 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2;
    window.innerWidth > 1360 ? this.config.spaceBetween = -5 : this.config.spaceBetween = 0;
    window.innerWidth > 1360 ? this.dishConfig.slidesPerView = 3 : this.dishConfig.slidesPerView = 2;
    if (window.innerWidth <= 430) {
      this.config.width = 210
      this.config.slidesPerView = 1
      this.dishConfig.slidesPerView = 1
      this.dishConfig.width = 260;
    }
  }

  ngOnInit(): void {
    console.log(this.config)
    window.innerWidth > 1360 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2;
    window.innerWidth > 1360 ? this.config.spaceBetween = -5 : this.config.spaceBetween = 0;
    window.innerWidth > 1360 ? this.dishConfig.slidesPerView = 3 : this.dishConfig.slidesPerView = 2;
    if (window.innerWidth <= 430) {
      this.config.width = 210
      this.config.slidesPerView = 1
      this.dishConfig.slidesPerView = 1
      this.dishConfig.width = 260;
    }
    window.addEventListener('resize', () => this.test())
  }

}
