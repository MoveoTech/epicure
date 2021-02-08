import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/interfaces/chef.interface';
import { ChefsService } from 'src/app/services/chefs.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-chef-of-the-week',
  templateUrl: './chef-of-the-week.component.html',
  styleUrls: ['./chef-of-the-week.component.css']
})
export class ChefOfTheWeekComponent implements OnInit {

  constructor(public chefService: ChefsService) { }

  config: SwiperOptions = {
    spaceBetween: 0,
  };

  resizeCarouselle(): void {
    if (window.innerWidth > 960) {
      this.config.slidesPerView = 3;
      this.config.width = 700;
    }
    if (window.innerWidth < 960) {
      this.config.width = 800;
      this.config.slidesPerView = 3;
    }
    if (window.innerWidth < 860) {
      this.config.width = 500;
      this.config.slidesPerView = 2;
    }
    if (window.innerWidth < 700) {
      this.config.width = 300;
      this.config.slidesPerView = 1;
    }
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => this.resizeCarouselle());
    this.resizeCarouselle();
    this.chefService.getWeeklyChef().subscribe(
      (res: Chef) => this.chefService.weeklyChef = res,
      err => console.log(err)
    );
  }

}
