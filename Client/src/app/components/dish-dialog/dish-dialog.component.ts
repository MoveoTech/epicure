import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrdersService } from 'src/app/services/orders.service';
import { UserService } from 'src/app/services/user.service';

interface dialogData {
  img_src: string,
  dish_name: string,
  description: string,
  price: number,
  icon: string,
  _id: string
}

@Component({
  selector: 'app-dish-dialog',
  templateUrl: './dish-dialog.component.html',
  styleUrls: ['./dish-dialog.component.css']
})



export class DishDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: dialogData,
    private orderService: OrdersService,
    private userService: UserService) { }

  quantity: number = 1

  increment() {
    this.quantity += 1
  }
  decrement() {
    if (this.quantity > 1) this.quantity -= 1
  }

  addDishToCart() {
    this.orderService.addOrder({ dish: this.data._id, quantity: this.quantity, user: this.userService.userId })
      .subscribe(res => console.log(res),
        err => console.log(err)
      )
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}
