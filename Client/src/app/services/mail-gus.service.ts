import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailGusService {

  constructor(private http: HttpClient) { }
  sendMail(body): any {
    return this.http.post(`${environment.BASE_URL}/mail`, body);
  }
}
