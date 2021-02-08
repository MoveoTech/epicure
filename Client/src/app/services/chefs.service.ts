import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chef } from '../interfaces/chef.interface';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  constructor(private http: HttpClient) { }

  weeklyChef: Chef;
  chefs: Chef[];
  getAllChefs(): any {
    return this.http.get(`${environment.BASE_URL}/chefs`);
  }

  getWeeklyChef(): any {
    return this.http.get(`${environment.BASE_URL}/chefs/weekly`);
  }

  addChef(body): any {
    return this.http.post(`${environment.BASE_URL}/admin/chef/add`, body, {
      headers: environment.loaclStorageHeader(),
    });
  }

  editChef(body): any {
    return this.http.put(`${environment.BASE_URL}/admin/chef/edit`, body, {
      headers: environment.loaclStorageHeader(),
    });
  }

  deleteChef(id): any {
    return this.http.request('delete', `${environment.BASE_URL}/admin/chef/delete`, {
      headers: environment.loaclStorageHeader(),
      body: { id }
    });
  }
}
