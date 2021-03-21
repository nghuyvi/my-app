import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    // children: [
    //   {
    //     path: 'tin-tuc',
    //     component: NewsReviewPromotionComponent
    //   },
    // ]
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      // {
      //   path: 'list-movie',
      //   component: ListMovieComponent
      // },
      // {
      //   path: 'about-page',
      //   component: AboutPageComponent
      // },
      // {
      //   path: 'detail-page/:id',
      //   component: DetailPageComponent
      // },
      // {
      //   path: 'booking-page',
      //   component: BookingPageComponent
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
