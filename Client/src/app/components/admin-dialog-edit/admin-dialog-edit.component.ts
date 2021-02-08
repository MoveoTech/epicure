import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Restaurant } from 'src/app/interfaces/restaurant.interfece';
import { ChefsService } from 'src/app/services/chefs.service';
import { DishesService } from 'src/app/services/dishes.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';



@Component({
  selector: 'app-admin-dialog-edit',
  templateUrl: './admin-dialog-edit.component.html',
  styleUrls: ['./admin-dialog-edit.component.css']
})
export class AdminDialogEditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    public chefService: ChefsService,
    public restaurantsService: RestaurantsService,
    private dishService: DishesService
  ) { }

  editForm: FormGroup;
  restaurants: FormArray;
  popularity: number[] = [];

  ngOnInit(): void {

    if (this.data.selectedCategory === 'restaurants') {
      for (let i = 1; i <= 10; i++) {
        this.popularity.push(i);
      }
      this.editForm = this.fb.group({
        _id: [this.data.item._id],
        name: [this.data.item.name, Validators.required],
        chef: [this.data.item.chef._id, Validators.required],
        img_src: [this.data.item.img_src, Validators.required],
        popularity: [this.data.item.popularity, Validators.required]
      });
      this.chefService.getAllChefs().subscribe(
        (res: any) => this.chefService.chefs = res,
        err => console.log(err)
      );
    }
    else if (this.data.selectedCategory === 'chefs') {
      this.restaurants = new FormArray([]);
      this.editForm = this.fb.group({
        _id: [this.data.item._id],
        name: [this.data.item.name, Validators.required],
        description: [this.data.item.description, Validators.required],
        img_src: [this.data.item.img_src]
      });
      this.restaurantsService.getAllRestaurants().subscribe(
        (res: { restaurants: Restaurant[] }) => this.restaurantsService.allRestaurants = res.restaurants,
        err => console.log(err)
      );
    }
    else if (this.data.selectedCategory === 'dishes') {
      this.editForm = this.fb.group({
        _id: [this.data.item._id],
        dish_name: [this.data.item.dish_name, Validators.required],
        description: [this.data.item.description, Validators.required],
        dish_price: [this.data.item.dish_price, Validators.required],
        img_src: [this.data.item.img_src, Validators.required],
        restaurant: [this.data.item.restaurant._id, Validators.required],
        icon: ['']
      });
      this.restaurantsService.getAllRestaurants().subscribe(
        (res: { restaurants: Restaurant[] }) => this.restaurantsService.allRestaurants = res.restaurants,
        err => console.log(err)
      );
    }

    if (this.data.item.restaurants) {
      for (const control of this.data.item.restaurants.length) {
        this.restaurants.push(new FormControl(control._id));
      }
    }
  }

  addRestaurants(): void {
    this.restaurants.push(new FormControl(''));
  }

  removeRestaurant(index: number): void {
    this.restaurants.removeAt(index);
  }

  editItem(): void {
    if (this.data.selectedCategory === 'chefs') {
      this.chefService.editChef({ ...this.editForm.value, restaurants: this.restaurants.value }).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    }
    else if (this.data.selectedCategory === 'restaurants') {
      this.restaurantsService.editRestaurant(this.editForm.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    }
    else if (this.data.selectedCategory === 'dishes') {
      this.dishService.editDish(this.editForm.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    }
  }

}
