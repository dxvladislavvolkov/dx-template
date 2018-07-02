import { Component, NgModule, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from '@app/components/login/login.component';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@Component({
    selector: 'navigation-header',
    styles: [`
        ::ng-deep .dx-toolbar .dx-toolbar-items-container {
            height: 100%;
        }
    `],
    templateUrl: 'navigation-header.component.html'
})

export class NavigationHeaderComponent {
    @Output() onClickMenu = new EventEmitter<boolean>();
    @Input() isMenuOpened: boolean;
    showLoginPopup = false;
    user: any = null;
    menuItems: any;
    

    constructor() {
        this.menuItems = [{
            location: 'before',
            widget: 'dxButton',
            options: {
                icon: 'menu',
                onClick: () => {
                    console.log(this.isMenuOpened);
                    this.onClickMenu.emit(this.isMenuOpened);
                }
            }
        }, {
            location: 'after',
            widget: 'dxButton',
            locateInMenu: 'auto',
            options: {
                text: 'Login',
                icon: 'user',
                onClick: this.onShowLoginPopup.bind(this)
            }
        }]
    }

    onShowLoginPopup() {
        this.showLoginPopup = true;
    }

    loginClick(args) {
        alert(args.login + ' ' + args.password);
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

