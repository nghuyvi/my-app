import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SlideComponent } from './home-page/slide/slide.component';
import { ListPhimComponent } from './home-page/list-phim/list-phim.component';
import { ListPhimDangChieuComponent } from './home-page/list-phim/list-phim-dang-chieu/list-phim-dang-chieu.component';
import { ListPhimSapChieuComponent } from './home-page/list-phim/list-phim-sap-chieu/list-phim-sap-chieu.component';
import { ItemPhimComponent } from './home-page/list-phim/item-phim/item-phim.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ListMoviePageComponent } from './list-movie-page/list-movie-page.component';
import { ItemSeatComponent } from './booking-page/item-seat/item-seat.component';
import { ListSeatComponent } from './booking-page/list-seat/list-seat.component';
import { ContentComponent } from './home-page/content/content.component';
import { NewsComponent } from './home-page/content/news/news.component';
import { PromotionComponent } from './home-page/content/promotion/promotion.component';
import { ReviewComponent } from './home-page/content/review/review.component';

import { CarouselModule } from 'ngx-owl-carousel-o'; // for owl carousel
import { SharedModule } from '../shared/shared.module'; // shared module
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [SharedModule, HomeRoutingModule, CarouselModule, FormsModule],
  declarations: [
    HomeComponent,
    HomePageComponent,
    SlideComponent,
    ListPhimComponent,
    ListPhimDangChieuComponent,
    ListPhimSapChieuComponent,
    ItemPhimComponent,
    BookingPageComponent,
    AboutPageComponent,
    ListMoviePageComponent,
    ItemSeatComponent,
    ListSeatComponent,
    ContentComponent,
    NewsComponent,
    PromotionComponent,
    ReviewComponent,
    SignUpPageComponent,
  ],

  exports: [HomePageComponent],
})
export class HomeModule {}
