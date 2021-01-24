import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chef } from 'src/app/interfaces/chef.interface';
import { ChefsService } from 'src/app/services/chefs.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent implements OnInit {
  selectedCategory: string;
  options = ['Restaurants', 'Dishes', 'Chefs'];
  addForm: FormGroup

  constructor(private fb: FormBuilder, public chefService: ChefsService, private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {

  }
  changeCategory(value) {
    this.chefService.getAllChefs().subscribe(
      (res: Chef[]) => this.chefService.chefs = res,
      err => console.log(err)
    )
    this.selectedCategory = value
    if (value = 'Restaurants') {
      this.addForm = this.fb.group({
        name: ['', Validators.required],
        chef: ['', Validators.required],
        description: ['', Validators.required],
        img_src: ['', Validators.required]
      })
    }
  }
  add() {
    console.log(this.addForm.value)
    if (this.selectedCategory === 'Restaurants') {
      this.restaurantsService.addRestaurant(this.addForm.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
  }
}
