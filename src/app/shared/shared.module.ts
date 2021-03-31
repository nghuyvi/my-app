import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ItemMovieComponent } from './components/item-movie/item-movie.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemContentComponent } from './components/item-content/item-content.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, FontAwesomeModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    ItemMovieComponent,
    ItemContentComponent,
  ],

  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    CommonModule,
    NgbModule,
    CommonModule,
    ItemMovieComponent,
    ItemContentComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
