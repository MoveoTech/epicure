import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent implements OnInit {
  selectedCategory: string;
  options = ['Restaurants', 'Dishes', 'Chefs'];
  addForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  changeCategory(value) {
    this.selectedCategory = value
    if(value='Restaurants'){
      
    }
  }

}
