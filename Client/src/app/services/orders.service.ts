import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getUserOrders() {
    return this.http.get(`${environment.BASE_URL}/orders`)
  }

  addOrder(body) {
    return this.http.post(`${environment.BASE_URL}/orders/add`, body, {
      headers: environment.loaclStorageHeader
    })
  }

}
