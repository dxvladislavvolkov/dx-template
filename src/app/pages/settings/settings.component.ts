import { Component, NgModule } from '@angular/core';
import { CardModule } from '@app/components/index';
import { DxCheckBoxModule, DxButtonModule } from 'devextreme-angular';

@Component({
  templateUrl: 'settings.template.html',
  styles: [`
    ::ng-deep .dx-checkbox-text {
      color: #000;
    }
  `]
})

export class SettingsComponent {
  constructor() { }
}


@NgModule({
  imports: [CardModule, DxCheckBoxModule, DxButtonModule],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
