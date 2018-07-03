import { Component, NgModule, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from '@app/components/login/login.component';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@Component({
    selector: 'navigation-header',
    styles: [`
        :host ::ng-deep .dx-toolbar .dx-toolbar-items-container {
            height: 100%;
        }
    `],
    templateUrl: 'navigation-header.component.html'
})

export class NavigationHeaderComponent {
    @Input() selectedItem: string;
    showLoginPopup = false;
    user: any = null;
    isUserAuthorized = false;
    buttonOptions = {
        text: 'Login',
        icon: 'user',
        onClick: this.onShowLoginPopup.bind(this)
    };
    userTemplate = '<div class=\'toolbar-user\'>'+ this.user +'</div>';

    constructor() {}

    onShowLoginPopup() {
        this.showLoginPopup = true;
    }

    loginClick(args) {
        this.user = args.login;
        this.showLoginPopup = false;
        this.isUserAuthorized = true;
    }

    onLogoutClick() {

    }
}

@NgModule({
    imports: [
        CommonModule,
        DxButtonModule,
        DxPopupModule,
        DxToolbarModule,
        LoginModule
    ],
    declarations: [ NavigationHeaderComponent ],
    exports: [ NavigationHeaderComponent ]
})
export class NavigationHeaderModule { }

