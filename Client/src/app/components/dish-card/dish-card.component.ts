import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DishDialogComponent } from '../dish-dialog/dish-dialog.component';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() dishName: string;
  @Input() description: string;
  @Input() icon: string;
  @Input() price: string;
  @Input() id: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DishDialogComponent, {
      data: {
        img_src: this.imgSrc,
        dish_name: this.dishName,
        description: this.description,
        price: this.price,
        icon: this.icon,
        _id: this.id
      },
      height: '1080px'
    });
  }

}

