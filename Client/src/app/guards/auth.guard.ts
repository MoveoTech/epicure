import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private r: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.access_token) {
      this.r.navigateByUrl('')
      return false;
    }
    this.userService.verifyLogged().subscribe(
      (res: any) => {
        if (!res.error) return true
        else {
          this.r.navigateByUrl('')
          return false
        }
      },
      err => { return false }
    )
    return true;
  }

}
