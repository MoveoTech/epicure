import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chef } from '../interfaces/chef.interface';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  constructor(private http: HttpClient) { }

  weeklyChef: Chef

  getAllChefs() {
    return this.http.get(`${environment.BASE_URL}/chefs`)
  }

  getWeeklyChef() {
    return this.http.get(`${environment.BASE_URL}/chefs/weekly`)
  }

}
