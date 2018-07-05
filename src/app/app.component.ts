import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuVisible = true;

  clickOnMenuButton(value) {
    this.menuVisible = !value;
  }
}
