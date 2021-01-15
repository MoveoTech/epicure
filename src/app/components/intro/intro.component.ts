import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface RestaurantsGroup {
  option: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})


export class IntroComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder) { }

  restForm: FormGroup = this._formBuilder.group({
    restaurant: '',
  });
  restaurantsGroup: RestaurantsGroup[] = [
    {
      option: "Restaurants",
      names: ["Claro", "Lumina", "Tiger Lilly"]
    },
    {
      option: "Cuisine",
      names: ["Thai", "Israeli", "European"]
    }
  ]

  restOptions: Observable<RestaurantsGroup[]>;


  ngOnInit() {
    this.restOptions = this.restForm.get('restaurant')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): RestaurantsGroup[] {
    if (value) {
      return this.restaurantsGroup
        .map(group => ({ option: group.option, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.restaurantsGroup;
  }
};
