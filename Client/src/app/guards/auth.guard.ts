import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
        this.r.navigateByUrl('')
        resolve(false);
      }
      this.userService.verifyLogged().subscribe(
        (res: any) => {
          if (!res.error) {

            resolve(true)
          }

          else {
            this.r.navigateByUrl('')
            resolve(false)
          }
        },
        err => {
          this.r.navigateByUrl('')
          console.log(err)
        }
      )
    })

  }

}
