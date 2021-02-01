import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface dialogData {
  img_src: string,
  dish_name: string,
  description: string,
  price: number,
  icon: string
}

@Component({
  selector: 'app-dish-dialog',
  templateUrl: './dish-dialog.component.html',
  styleUrls: ['./dish-dialog.component.css']
})



export class DishDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogData) { }

  quantity: number = 1

  increment() {
    this.quantity += 1
  }
  decrement() {
    if (this.quantity > 1) this.quantity -= 1

  }

  ngOnInit(): void {
  }

}
