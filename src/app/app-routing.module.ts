import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { EmptyComponent,  EmptyModule } from './pages/empty/empty.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'empty',
    pathMatch: 'full'
  }, {
    path: 'empty',
    component: EmptyComponent,
    data: { title: 'Empty' }
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    EmptyModule
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
