import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Chef } from 'src/app/interfaces/chef.interface';
import { Restaurant } from 'src/app/interfaces/restaurant.interfece';
import { ChefsService } from 'src/app/services/chefs.service';
import { DishesService } from 'src/app/services/dishes.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent implements OnInit {
  selectedCategory: string;
  options = ['Restaurants', 'Dishes', 'Chefs'];
  addForm: FormGroup;
  restaurants: FormArray
  constructor(
    private fb: FormBuilder,
    public chefService: ChefsService,
    public restaurantsService: RestaurantsService,
    private dishService: DishesService
  ) { }

  ngOnInit(): void {
    this.chefService.getAllChefs().subscribe(
      (res: Chef[]) => this.chefService.chefs = res,
      err => console.log(err)
    )
    this.restaurantsService.getAllRestaurants().subscribe(
      (res: Restaurant[]) => this.restaurantsService.restaurants = res,
      err => console.log(err)
    )
  };

  changeCategory(value) {
    this.selectedCategory = value
    if (this.selectedCategory === 'Restaurants') {
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        chef: ['', Validators.required],
        img_src: ['', Validators.required]
      })
    }
    else if (this.selectedCategory === 'Chefs') {
      this.restaurants = new FormArray([])
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        img_src: ['', Validators.required],
      })
    }
    else if (this.selectedCategory === 'Dishes') {
      this.addForm = this.fb.group({
        dish_name: ['', Validators.required],
        description: ['', Validators.required],
        dish_price: ['1', Validators.required],
        img_src: ['', Validators.required],
        restaurant: ['', Validators.required],
        icon: ['',]
      })
    }
  };

  addRestaurants() {
    this.restaurants.push(new FormControl(''))
  }

  removeRestaurant(index: number) {
    this.restaurants.removeAt(index);
  }

  add() {
    if (this.selectedCategory === 'Restaurants') {
      this.restaurantsService.addRestaurant(this.addForm.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
    else if (this.selectedCategory === 'Dishes') {
      this.dishService.addDish(this.addForm.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
    else if (this.selectedCategory === 'Chefs') {
      this.chefService.addChef({ ...this.addForm.value, restaurants: this.restaurants.value }).subscribe(
        res => console.log(res),
        err => console.log(err),
      )
    }
  }
};
