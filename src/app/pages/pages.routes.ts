import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { MapsComponent, MapsModule } from './maps/maps.component';
import { WidgetsComponent, WidgetsModule } from './widgets/widgets.component';
import { SettingsComponent, SettingsModule } from './settings/settings.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full'
  }, {
    path: 'maps',
    component: MapsComponent,
    data: { title: 'Maps' }
  }, {
    path: 'maps/vector',
    component: WidgetsComponent,
    data: { title: 'Vecor Maps' }
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

export const menuItems = [
  { text: 'Maps', path: 'maps', icon: 'map', items: [] },
  { text: 'Widgets', path: 'widgets', icon: 'box' },
  { text: 'Settings', path: 'settings', icon: 'preferences' }
]

menuItems[0].items = [
  { text: 'Vector Maps', path: 'maps/vector' },
  { text: 'Raster Maps', path: 'maps/raster' },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    MapsModule,
    SettingsModule,
    WidgetsModule
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
