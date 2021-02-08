import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getUserOrders(): any {
    return this.http.get(`${environment.BASE_URL}/orders`, {
      headers: environment.loaclStorageHeader()
    });
  }

  addOrder(body): any {
    return this.http.post(`${environment.BASE_URL}/orders/add`, body, {
      headers: environment.loaclStorageHeader()
    });
  }

  removeOrderItem(id): any {
    return this.http.request('delete', `${environment.BASE_URL}/orders`,
      {
        body: { id },
        headers: environment.loaclStorageHeader()
      }
    );
  }
}
