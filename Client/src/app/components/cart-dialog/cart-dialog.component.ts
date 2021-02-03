import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

interface tableData {

}

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  username: string;
  displayedColumns: string[] = ['number', 'name', 'quantity','image' , 'price', 'delete' ,];
  tableData = [];
  totalOrderPrice: number = 0

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe(
      (res: any) => {
        console.log(res)
        this.tableData = res
        this.username = res[0].user.username
        res.forEach(item => {
          this.totalOrderPrice += item.dish.dish_price * item.quantity
        });
      }
    )
  }

}
