import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NotFoundPageComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    CommonModule,
    NgbModule,
    CommonModule,
  ],
})
export class SharedModule {}
