import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { LoginComponent } from './components/login/login.component';
import { MailGunComponent } from './components/mail-gun/mail-gun.component';
import { MainComponent } from './components/main/main.component';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminMainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'restaurants', component: RestaurantsPageComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'mail', component: MailGunComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
