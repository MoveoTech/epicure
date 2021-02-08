import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private fb: FormBuilder, public restaurantService: RestaurantsService, private userSerivce: UserService) { }

  reviewForm: FormGroup;
  restaurants: [];
  ratingsArray = [];
  userId: string;

  ngOnInit(): void {
    this.restaurantService.getAllRestaurants().subscribe(
      (res: any) => this.restaurants = res.restaurants
    );
    this.userSerivce.verifyLogged().subscribe(
      (res: any) => {
        this.userId = res._id;
      }
    );
    this.reviewForm = this.fb.group({
      body: ['', Validators.required],
      user: [this.userId],
      restaurant: ['', Validators.required],
      rating: ['', Validators.required]
    });
    for (let i = 1; i <= 10; i++) {
      this.ratingsArray.push(i);
    }
  }

  handleSubmit(): void {
    console.log(this.reviewForm.value);
  }

}
