import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { HomeComponent, HomeModule } from './pages/home/home.component';
import { AboutComponent, AboutModule } from './pages/about/about.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  }, {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    HomeModule,
    AboutModule
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
