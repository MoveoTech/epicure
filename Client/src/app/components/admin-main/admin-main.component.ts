import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChefsService } from 'src/app/services/chefs.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor(private dialog: MatDialog, public chefService: ChefsService) { }

  selectedCategory: string;

  ngOnInit(): void {
    this.chefService.getAllChefs().subscribe(
      res => {
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

  test(e) {
    e.tab.textLabel.toLowerCase()
  };

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
}

