import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconMeaningComponent } from './components/icon-meaning/icon-meaning.component';
import { ChefOfTheWeekComponent } from './components/chef-of-the-week/chef-of-the-week.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DishDialogComponent } from './components/dish-dialog/dish-dialog.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { ChefRestaurantCardComponent } from './components/chef-restaurant-card/chef-restaurant-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminDialogComponent } from './components/admin-dialog/admin-dialog.component';
import { AdminDialogEditComponent } from './components/admin-dialog-edit/admin-dialog-edit.component';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { MailGunComponent } from './components/mail-gun/mail-gun.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';
import { ReviewComponent } from './components/review/review.component';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component'

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  navigation: false,
  keyboard: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    MainComponent,
    CardComponent,
    IconMeaningComponent,
    ChefOfTheWeekComponent,
    AboutComponent,
    FooterComponent,
    DishDialogComponent,
    DishCardComponent,
    ChefRestaurantCardComponent,
    AdminLoginComponent,
    AdminMainComponent,
    AdminDialogComponent,
    AdminDialogEditComponent,
    RestaurantsPageComponent,
    MailGunComponent,
    LoginComponent,
    CartDialogComponent,
    ReviewComponent,
    RestaurantReviewsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'epicure' }),
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
  ],
  providers: [{ provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
