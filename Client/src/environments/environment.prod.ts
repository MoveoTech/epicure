import { HttpHeaders } from "@angular/common/http";

const headers = () => { return new HttpHeaders({ 'Authorization': localStorage.access_token }) }

export const environment = {
  production: true,
  BASE_URL: 'https://epicure-ron.moveodevelop.com/api',
  loaclStorageHeader: headers
};
