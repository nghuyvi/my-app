import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HomePageRoutingModule } from './home-page/home-page-routing.module';
import { SlideComponent } from './home-page/slide/slide.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomePageComponent, HeaderComponent, FooterComponent, SlideComponent],
  imports: [CommonModule, HomePageRoutingModule, NgbModule],
  exports: [HomePageComponent, HeaderComponent, FooterComponent],
})
export class HomeModule {}
