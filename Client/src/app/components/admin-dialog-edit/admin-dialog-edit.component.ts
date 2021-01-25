import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  editForm: FormGroup
  restaurants: FormArray

  ngOnInit(): void {

    if (this.data.selectedCategory === 'restaurants') {
      this.editForm = this.fb.group({
        _id: [this.data.item._id],
        name: [this.data.item.name, Validators.required],
        chef: [this.data.item.chef._id, Validators.required],
        img_src: [this.data.item.img_src, Validators.required]
      })
      this.chefService.getAllChefs().subscribe(
        (res: any) => this.chefService.chefs = res,
        err => console.log(err)
      )
    }
    else if (this.data.selectedCategory === 'chefs') {
      this.restaurants = new FormArray([])
      this.editForm = this.fb.group({
        _id: [this.data.item._id],
        name: [this.data.item.name, Validators.required],
        description: [this.data.item.description, Validators.required],
        img_src: [this.data.item.img_src]
      })
      this.restaurantsService.getAllRestaurants().subscribe(
        (res: any) => this.restaurantsService.restaurants = res,
        err => console.log(err)
      )
    }
    else if (this.data.selectedCategory === 'dishes') {
      this.editForm = this.fb.group({
        _id: [this.data.item._id],
        dish_name: [this.data.item.dish_name, Validators.required],
        description: [this.data.item.description, Validators.required],
        dish_price: [this.data.item.dish_price, Validators.required],
        img_src: [this.data.item.img_src, Validators.required],
        restaurant: [this.data.item.restaurant._id, Validators.required],
        icon: ['',]
      })
      this.restaurantsService.getAllRestaurants().subscribe(
        (res: any) => this.restaurantsService.restaurants = res,
        err => console.log(err)
      )
    }
    //Get all restaurnts
    if (this.data.item.restaurants) {
      for (let i = 0; i < this.data.item.restaurants.length; i++) {
        this.restaurants.push(new FormControl(this.data.item.restaurants[i]._id))
      }
    }
  }

  addRestaurants() {
    this.restaurants.push(new FormControl(''))
  }

  removeRestaurant(index: number) {
    this.restaurants.removeAt(index);
  }

  editItem() {
    console.log(this.editForm.value)
    if (this.data.selectedCategory === 'chefs') {
      this.chefService.editChef({ ...this.editForm.value, restaurants: this.restaurants.value }).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
    else if (this.data.selectedCategory === 'restaurants') {
      this.restaurantsService.editRestaurant(this.editForm.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
    else if (this.data.selectedCategory === 'dishes') {
      this.dishService.editDish(this.editForm.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
  }

}
