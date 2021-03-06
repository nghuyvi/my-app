import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule,
  },
  // {
  //   path: 'admin',
  //   loadChildren: ()=> AdminModule
  // },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
