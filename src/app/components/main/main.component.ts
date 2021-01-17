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
  dishConfig : SwiperOptions = {
    // width : 530
  }

  constructor() { }

  spaceDescription = `Polenta fingers, veal cheek,
 magic chili cured lemon cream, yellow laksa`

  ngOnInit(): void {

    window.innerWidth > 1160 ? this.config.slidesPerView = 3 : this.config.slidesPerView = 2
    window.innerWidth > 1160 ? this.dishConfig.slidesPerView = 3 : this.dishConfig.slidesPerView = 2
    window.innerWidth > 1160 ? this.config.spaceBetween = -5 : this.config.spaceBetween = 0
    window.innerWidth > 1160 ? null : this.dishConfig.width = 530
  }

}
