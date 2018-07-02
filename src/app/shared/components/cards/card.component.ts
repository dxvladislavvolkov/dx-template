import { Component, NgModule, Input, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'card',
    styles: [`
        :host {
            display: block;
            flex: 1;
            margin: 20px;
            overflow: hidden;
            box-shadow: 0 3px 15px 0 rgba(0,0,0,.1);
        }

        .jsa-card-header {
            color: #304967;
            background-color: #fff;
            min-height: 44px;
            padding: 0 20px;
            border-bottom: 1px solid rgb(138, 138, 138);
        }

        .jsa-card-title {
            display: inline-block;
            margin-top: 8px;
        }

        .jsa-card-body {
            transition: transform 300ms linear;
            transform-origin: 50% 0;
            padding: 20px;
            color: #000;
            background-color: #fff;
        }

        .jsa-card-body-collapsed {
            height: 0px;
            padding: 0;
        }
    `],
    templateUrl: 'card.template.html'
})

export class CardComponent implements OnInit {
    @Input() title: String;
    @Input()
    get width(): string {
        return this.el.nativeElement.style.width;
    }
    set width(value: string) {
        this.el.nativeElement.style.width = value;
    }

    expanded = false;

    constructor(private el: ElementRef) {
    }

    toggleExpanded() {
        this.expanded = !this.expanded;
    }

    ngOnInit() {
    }
}

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CardComponent ],
    exports: [ CardComponent ]
})
export class CardModule { }

