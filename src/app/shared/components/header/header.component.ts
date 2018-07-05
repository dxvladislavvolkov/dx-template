import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from '../login/login.component';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styles: [`
        .user-image {
            width: 20px;
            height: 20px;
            float: left;
            margin-right: 10px;
        }
    `]
})

export class HeaderComponent {
    showLoginPopup = false;
    user: any = null;
    isUserAuthorized = false;

    constructor() {}

    onShowLoginPopup = () => {
        this.showLoginPopup = true;
    }

    loginClick(args) {
        this.user = args.login;
        this.showLoginPopup = false;
        this.isUserAuthorized = true;
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxPopupModule,
        DxButtonModule,
        DxToolbarModule,
        LoginModule
    ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }

