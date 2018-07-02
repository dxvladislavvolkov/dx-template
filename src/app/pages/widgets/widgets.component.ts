import { Component, NgModule } from '@angular/core';

@Component({
  templateUrl: 'widgets.template.html'
})

export class WidgetsComponent {
  constructor() { }
}


@NgModule({
  imports: [],
  declarations: [WidgetsComponent]
})
export class WidgetsModule { }
