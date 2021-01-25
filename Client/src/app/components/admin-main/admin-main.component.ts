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

  selectedCategory: string = 'chefs' //starting category
  displayedColumns: string[] = ['actions', 'position', 'name', 'restaurants', 'image', 'description',];
  dataSource = []

  ngOnInit(): void {
    this.chefService.getAllChefs().subscribe(
      (res: any) => {
        console.log(res)
        this.dataSource = res
      },
      err => console.log(err)
    )
  };

  openDialog() {
    this.dialog.open(AdminDialogComponent).afterClosed().subscribe(() => this.changeCategory())
  }

  delete(id, name) {
    //Delete Chef
    const result = confirm(`Are you sure u want to delete ${name}???`)
    if (result) {
      if (this.selectedCategory === 'chefs') {
        this.chefService.deleteChef(id).subscribe(
          res => {
            console.log(res)
            this.chefService.getAllChefs().subscribe((res: any) => this.dataSource = res)
          }
        )
      }
      else if (this.selectedCategory === 'restaurants') {
        this.restaurantService.deleteRestaurant(id).subscribe(res => {
          console.log(res)
          this.restaurantService.getAllRestaurants().subscribe((res: any) => this.dataSource = res)
        })
      }
      else if (this.selectedCategory === 'dishes') {
        this.dishService.deleteDish(id).subscribe(res => {
          console.log(res)
          this.dishService.getSignatureDishes().subscribe((res: any) => this.dataSource = res)
        })
      }
    }
  }

  changeCategory(e?) {
    if (e) {
      this.selectedCategory = e.tab.textLabel.toLowerCase()
    }
    if (this.selectedCategory === 'restaurants') {
      this.restaurantService.getAllRestaurants().subscribe(
        (res: any) => {
          console.log(res)
          this.dataSource = res
          this.displayedColumns = this.displayedColumns.filter(column => column !== 'price' && column !== 'restaurants' && column !== 'description')
        }
      )
    }
    else if (this.selectedCategory === 'chefs') {
      console.log('called')
      this.ngOnInit()
      this.displayedColumns = this.displayedColumns.filter(column => column !== 'price' && column !== 'description' && column !== 'restaurants')
      this.displayedColumns.push('restaurants', 'description')
    }
    else if (this.selectedCategory === 'dishes') {
      this.dishService.getSignatureDishes().subscribe(
        (res: any) => {
          console.log(res)
          this.dataSource = res
          this.displayedColumns = this.displayedColumns.filter(column => column !== 'price' && column !== 'description' && column !== 'restaurants')
          this.displayedColumns.push('price', 'description')
        }
      )
    }
  };


}

