import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DishDialogComponent } from '../dish-dialog/dish-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() restaurant: string;
  @Input() chef: string;
  @Input() icon: string;
  @Input() price: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DishDialogComponent, {
      data: {
        img_src: this.imgSrc,
        dish_name: this.restaurant,
        description: this.chef,
        price: this.price
      },
      height: '1080px'
    });
  }

}
