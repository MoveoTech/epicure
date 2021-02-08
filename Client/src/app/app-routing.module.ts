import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { LoginComponent } from './components/login/login.component';
import { MailGunComponent } from './components/mail-gun/mail-gun.component';
import { MainComponent } from './components/main/main.component';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { ReviewComponent } from './components/review/review.component';
import { AuthGuard } from './guards/auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [UserAuthGuard], pathMatch: 'full' },
  { path: 'admin', component: AdminMainComponent, canActivate: [AuthGuard] },
  { path: 'reviews', component: ReviewComponent, canActivate: [UserAuthGuard] },
  { path: 'restaurant_reviews/:id', component: RestaurantReviewsComponent, canActivate: [UserAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'restaurants', component: RestaurantsPageComponent, canActivate: [UserAuthGuard] },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
