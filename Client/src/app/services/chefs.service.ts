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
  chefs: Chef[]
  getAllChefs() {
    return this.http.get(`${environment.BASE_URL}/chefs`)
  }

  getWeeklyChef() {
    return this.http.get(`${environment.BASE_URL}/chefs/weekly`)
  }

  addChef(body) {
    return this.http.post(`${environment.BASE_URL}/admin/chef/add`, body, {
      headers: { 'Authorization': localStorage.access_token },
    })
  }

  deleteChef(_id) {
    return this.http.request('delete', `${environment.BASE_URL}/admin/chef/delete`, {
      headers: { 'Authorization': localStorage.access_token },
      body: { _id }
    })
  }

}
