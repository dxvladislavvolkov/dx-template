import { Component, NgModule } from '@angular/core';

@Component({
    templateUrl: 'empty.template.html'
})

export class EmptyComponent {
    constructor() {}
}

@NgModule({
    imports: [],
    declarations: [EmptyComponent]
})
export class EmptyModule { }
