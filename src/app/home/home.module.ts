import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // for btn
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // for slide

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
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
  ],
  imports: [CommonModule, NgbModule, HomeRoutingModule],
  exports: [HomePageComponent, HeaderComponent, FooterComponent],
})
export class HomeModule {}
