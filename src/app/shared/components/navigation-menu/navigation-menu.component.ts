import { Component, NgModule, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxAccordionModule } from 'devextreme-angular/ui/accordion';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent implements OnInit {
  @Output() onClickMenu = new EventEmitter<boolean>();
  @Output() selectedItemsChanged = new EventEmitter<string>();
  @Input() isMenuOpened: boolean;
  menuItems = [{ 
    title: "Menu",
      icon: "home",
      subMenu: [{
        text: "Home",
        path: "home"
      }, {
        text: "About",
        path: "about"
      }]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showMenu = () => {
    this.onClickMenu.emit(this.isMenuOpened);
  }

  onItemSelectionChanged(event) {
      this.selectedItemsChanged.emit(event.itemData.text);
      this.router.navigate([event.itemData.path]);
  }
}

@NgModule({
  imports: [ DxTreeViewModule, DxToolbarModule, DxAccordionModule ],
  declarations: [ NavigationMenuComponent ],
  exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
