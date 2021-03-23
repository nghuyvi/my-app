import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // for btn
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // for slide

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HomePageRoutingModule } from './home-page/home-page-routing.module';
import { SlideComponent } from './home-page/slide/slide.component';
import { ListPhimComponent } from './home-page/list-phim/list-phim.component';
import { ListPhimDangChieuComponent } from './home-page/list-phim/list-phim-dang-chieu/list-phim-dang-chieu.component';
import { ListPhimSapChieuComponent } from './home-page/list-phim/list-phim-sap-chieu/list-phim-sap-chieu.component';
import { ItemPhimComponent } from './home-page/list-phim/item-phim/item-phim.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    ListPhimComponent,
    ListPhimDangChieuComponent,
    ListPhimSapChieuComponent,
    ItemPhimComponent,
  ],
  imports: [CommonModule, HomePageRoutingModule, NgbModule],
  exports: [HomePageComponent, HeaderComponent, FooterComponent],
})
export class HomeModule {}
