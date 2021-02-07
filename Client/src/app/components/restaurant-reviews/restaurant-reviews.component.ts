import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/interfaces/review.interface';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.css']
})
export class RestaurantReviewsComponent implements OnInit {

  constructor(public reviewsService: ReviewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.reviewsService.restaurantReviews)
    this.reviewsService.getReviews(this.route.snapshot.url[1].path)
      .subscribe(
        (res: Review[]) => {
          console.log(res)
          this.reviewsService.restaurantReviews = res
        },
        err => console.log(err)
      )
  }

}
