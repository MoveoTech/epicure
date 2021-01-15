import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const materialModules = [
  MatButtonModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRadioModule,
  MatAutocompleteModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
