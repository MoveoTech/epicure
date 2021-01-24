import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChefsService } from 'src/app/services/chefs.service';
import { DishesService } from 'src/app/services/dishes.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public chefService: ChefsService,
    private restaurantService: RestaurantsService,
    private dishService: DishesService
  ) { }

  selectedCategory: string;

  ngOnInit(): void {
    this.chefService.getAllChefs().subscribe(
      (res: any) => {
        console.log(res)
        this.dataSource = res
      },
      err => console.log(err)
    )
  };

  openDialog(operation) {
    this.dialog.open(AdminDialogComponent, {
      data: {
        operation: operation
      }
    })
  };

  changeCategory(e) {
    this.selectedCategory = e.tab.textLabel.toLowerCase()
    if (this.selectedCategory === 'restaurants') {
      this.restaurantService.getRestaurants().subscribe(
        (res: any) => {
          console.log(res)
          this.dataSource = res
          this.displayedColumns = this.displayedColumns.filter(column => column !== 'price')
        }
      )
    }
    else if (this.selectedCategory === 'chefs') {
      this.ngOnInit()
      this.displayedColumns = this.displayedColumns.filter(column => column !== 'price')
    }
    else if (this.selectedCategory === 'dishes') {
      this.dishService.getSignatureDishes().subscribe(
        (res: any) => {
          console.log(res)
          this.dataSource = res
          this.displayedColumns.push('price')
        }
      )
    }
  };

  displayedColumns: string[] = ['position', 'name', 'description', 'image',];
  dataSource = []
}

