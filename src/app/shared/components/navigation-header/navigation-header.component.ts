import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from '@app/components/login/login.component';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@Component({
    selector: 'navigation-header',
    templateUrl: 'navigation-header.component.html'
})

export class NavigationHeaderComponent {
    showLoginPopup = false;
    user: any = null;
    isUserAuthorized = false;
    buttonOptions = {
        text: 'Login',
        icon: 'user',
        onClick: this.onShowLoginPopup.bind(this)
    };
    userTemplate = '<div class=\'toolbar-user\'>Some user</div>';

    constructor() {}

    onShowLoginPopup() {
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
        DxToolbarModule,
        LoginModule
    ],
    declarations: [ NavigationHeaderComponent ],
    exports: [ NavigationHeaderComponent ]
})
export class NavigationHeaderModule { }

