import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface RestaurantsGroup {
  option: string;
  names: string[];
}

export const textFilter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})


export class IntroComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

  restForm: FormGroup = this.fb.group({
    restaurant: '',
  });
  restaurantsGroup: RestaurantsGroup[] = [
    {
      option: 'Restaurants',
      names: ['Claro', 'Lumina', 'Tiger Lilly']
    },
    {
      option: 'Cuisine',
      names: ['Thai', 'Israeli', 'European']
    }
  ];

  restOptions: Observable<RestaurantsGroup[]>;


  ngOnInit(): void {
    this.restOptions = this.restForm.get('restaurant').valueChanges
      .pipe(
        startWith(''),
        map(value => this.textFilterGroup(value))
      );
  }

  private textFilterGroup(value: string): RestaurantsGroup[] {
    if (value) {
      return this.restaurantsGroup
        .map(group => ({ option: group.option, names: textFilter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.restaurantsGroup;
  }
}
