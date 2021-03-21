import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HomePageRoutingModule } from './home-page/home-page-routing.module';

@NgModule({
  declarations: [HomePageComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomePageRoutingModule],
  exports: [HomePageComponent, HeaderComponent, FooterComponent],
})
export class HomeModule {}
