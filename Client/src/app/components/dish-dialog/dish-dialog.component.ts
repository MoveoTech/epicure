import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrdersService } from 'src/app/services/orders.service';
import { UserService } from 'src/app/services/user.service';

interface DialogData {
  img_src: string;
  dish_name: string;
  description: string;
  price: number;
  icon: string;
  _id: string;
}

@Component({
  selector: 'app-dish-dialog',
  templateUrl: './dish-dialog.component.html',
  styleUrls: ['./dish-dialog.component.css']
})

export class DishDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private orderService: OrdersService,
    private userService: UserService) { }

  quantity = 1;
  sideDish = 'White bread';

  increment(): void {
    this.quantity += 1;
  }

  decrement(): void {
    if (this.quantity > 1) { this.quantity -= 1; }
  }

  addDishToCart(): void {
    this.orderService.addOrder({ dish: this.data._id, quantity: this.quantity, user: this.userService.userId, side_dish: this.sideDish })
      .subscribe(res => console.log(res),
        err => console.log(err)
      );
  }

  changeSide(): void {
    console.log(this.sideDish);
  }

  ngOnInit(): void { }

}
