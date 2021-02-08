import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private r: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    return new Promise((resolve) => {
      if (!localStorage.access_token) {
        this.r.navigateByUrl('admin/login');
        resolve(false);
      }
      this.userService.verifyLogged().subscribe(
        (res: any) => {
          if (!res.error) {
            resolve(true);
          }

          else {
            this.r.navigateByUrl('admin/login');
            resolve(false);
          }
        },
        err => {
          this.r.navigateByUrl('admin/login');
          console.log(err);
        }
      );
    });
  }
}
