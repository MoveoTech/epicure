import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userId: string;
  username: string;

  userRegister(body): any {
    return this.http.post(`${environment.BASE_URL}/user/register`, body);
  }
  userLogin(body): any {
    return this.http.post(`${environment.BASE_URL}/user/login`, body);
  }

  adminLogin(body): any {
    return this.http.post(`${environment.BASE_URL}/admin/login`, body);
  }

  verifyLogged(): any {
    return this.http.get(`${environment.BASE_URL}/admin/verify`, {
      headers: environment.loaclStorageHeader()
    });
  }
}
