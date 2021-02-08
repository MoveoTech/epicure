import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  username: string;
  displayedColumns: string[] = ['number', 'name', 'quantity', 'side dish', 'image', 'price', 'delete'];
  tableData = [];
  totalOrderPrice = 0;

  constructor(private orderService: OrdersService, public userService: UserService) { }

  calcualteTotalPrice(array: [{ dish: { dish_price: number }, quantity: number }]): void {
    this.totalOrderPrice = 0;
    array.forEach(item => {
      this.totalOrderPrice += item.dish.dish_price * item.quantity;
    });
  }

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe(
      (res: any) => {
        console.log(res);
        this.tableData = res;
        this.calcualteTotalPrice(res);
      }
    );
  }

  removeItem(id): void {
    this.orderService.removeOrderItem(id).subscribe(
      (res: any) => {
        this.tableData = res;
        this.calcualteTotalPrice(res);
      },
      err => console.log(err)
    );
  }
}
