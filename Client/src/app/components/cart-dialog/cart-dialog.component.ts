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

  displayedColumns: string[] = ['number', 'name'];
  tableData = []
  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe(
      (res: any) => {
        console.log(res)
        this.tableData = res
      }
    )
  }

}
