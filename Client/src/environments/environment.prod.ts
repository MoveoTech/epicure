import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  BASE_URL: 'https://epicure-ron.moveodevelop.com/api',
  loaclStorageHeader: new HttpHeaders()
    .set('Authorization', localStorage.access_token)
};
