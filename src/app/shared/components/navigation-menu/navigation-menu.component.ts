import { Component, NgModule, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxAccordionModule } from 'devextreme-angular/ui/accordion';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styles: [`
      dx-tree-view.navigation-treeview.dx-widget.dx-collection.dx-treeview {
        background-color: #1C2B33;
      }
      :host ::ng-deep .navigation-treeview ul.dx-treeview-node-container {
        color: #fff;
      }
      :host ::ng-deep .dx-treeview .dx-treeview-item.dx-state-hover {
        color: #FF9559;
      }
      :host ::ng-deep.dx-treeview .dx-treeview-node:not(.dx-treeview-item-with-checkbox).dx-state-selected > .dx-treeview-item {
        background-color: #1C2B33;
      }
      :host ::ng-deep .dx-state-selected .dx-treeview-item {
        background-color: transparent !important;
        color: #FF9559 !important;
      }
      .menu-header {
        background-color: #FF9559;
      }
      :host ::ng-deep .menu-header .dx-button {
        background-color: #FF9559;
        border-color: #FF9559;
      }
      :host ::ng-deep .dx-button .dx-icon {
        color: #ffffff;
      }
      :host ::ng-deep .menu-header .dx-button-text {
        color: #ffffff;
      }
      :host ::ng-deep .dx-item.dx-accordion-item.dx-item-selected.dx-state-focused.dx-accordion-item-opened .dx-accordion-item-title {
        color: #FF9559;
      }
      :host ::ng-deep .dx-accordion-item-title:before {
        color: #FFFFFF;
      }
      :host ::ng-deep .dx-accordion-item-opened + .dx-accordion-item.dx-state-hover:not(.dx-state-focused) {
        border-top-color: rgba(221, 221, 221, 0.1);
      }
      :host ::ng-deep .dx-accordion-item-title .dx-icon {
        color: #fff;
      }
  `]
})
export class NavigationMenuComponent implements OnInit {
  @Output() onClickMenu = new EventEmitter<boolean>();
  @Output() selectedItemsChanged = new EventEmitter<string>();
  @Input() isMenuOpened: boolean;
  menuItems = [
    { title: "Desktop",
      icon: "home",
      subMenu: [{
        text: "Client",
        path: "client"
      }, {
        text: "Sales",
        items: [{
          text: "Sales1",
          path: "charts"
        },{
          text: "Sales2",
          path: "charts"
        }]
      }, {
        text: "Maps"
      }]
    }, {
      title: "Service",
      icon: "money",
      subMenu: [{
        text: "Client"
      }, {
        text: "Sales",
        items: [{
          text: "Sales1"
        },{
          text: "Sales2"
        }]
      }, {
        text: "Maps"
      }]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showMenu() {
    this.onClickMenu.emit(this.isMenuOpened);
  }

  onItemSelectionChanged(event) {
      this.selectedItemsChanged.emit(event.itemData.text);
      this.router.navigate([event.itemData.path]);
  }
}

@NgModule({
  imports: [ DxTreeViewModule, DxButtonModule, DxAccordionModule ],
  declarations: [ NavigationMenuComponent ],
  exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
