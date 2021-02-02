import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userId: string
  userRegister(body) {
    return this.http.post(`${environment.BASE_URL}/user/register`, body)
  }
  userLogin(body) {
    return this.http.post(`${environment.BASE_URL}/user/login`, body)
  }

  adminLogin(body) {
    return this.http.post(`${environment.BASE_URL}/admin/login`, body)
  }

  verifyLogged() {
    return this.http.get(`${environment.BASE_URL}/admin/verify`, {
      headers: { "Authorization": localStorage.access_token }
    })
  }

}
