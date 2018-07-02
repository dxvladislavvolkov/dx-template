import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { MapsComponent, MapsModule } from './pages/maps/maps.component';
import { WidgetsComponent, WidgetsModule } from './pages/widgets/widgets.component';
import { SettingsComponent, SettingsModule } from './pages/settings/settings.component';
import { ChartsComponent,  ChartsModule } from './pages/charts/charts.component';
import { ClientComponent,  ClientModule } from './pages/client/client.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  }, {
    path: 'charts',
    component: ChartsComponent,
    data: { title: 'Charts' }
  },{
    path: 'client',
    component: ClientComponent,
    data: { title: 'Client' }
  }, {
    path: 'maps',
    component: MapsComponent,
    data: { title: 'Maps' }
  }, {
    path: 'widgets',
    component: WidgetsComponent,
    data: { title: 'widgets' }
  }, {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'settings' }
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    MapsModule,
    ClientModule,
    ChartsModule,
    SettingsModule,
    WidgetsModule
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
