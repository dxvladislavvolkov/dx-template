import { Component, NgModule, OnInit } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent implements OnInit {

  menuItems = [
    { text: 'Maps', path: 'maps', icon: 'map'},
    { text: 'Widgets', path: 'widgets', icon: 'box' },
    { text: 'Settings', path: 'settings', icon: 'preferences' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onItemSelectionChanged(event) {
      this.router.navigate([event.itemData.path]);
  }
}

@NgModule({
  imports: [ DxTreeViewModule ],
  declarations: [ NavigationMenuComponent ],
  exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
