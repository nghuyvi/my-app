import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home.component';
import { ListMoviePageComponent } from './list-movie-page/list-movie-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'list-movie-page',
        component: ListMoviePageComponent,
      },
      {
        path: 'about-page',
        component: AboutPageComponent,
      },
      {
        path: 'booking-page',
        component: BookingPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
