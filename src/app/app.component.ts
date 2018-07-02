import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuVisible = false;
  selectedItem="";

  clickMenu(value) {
    this.menuVisible = !value;
  }
  selectedItemsChanged(value) {
    this.selectedItem = value;
  }
}
