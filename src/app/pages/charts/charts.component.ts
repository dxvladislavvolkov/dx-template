import { Component, NgModule } from '@angular/core';
import { DxChartModule, DxPieChartModule } from 'devextreme-angular';
import { CardModule } from '@app/components/index';

@Component({
    templateUrl: 'charts.template.html',
    styles: [`
        .card-container {
            display: flex;
        }
    `]
})

export class ChartsComponent {
    populationData: any;
    areas: any;
    constructor() {
        this.populationData = [{
            arg: 1950,
            val: 2525778669
        }, {
            arg: 1960,
            val: 3026002942
        }, {
            arg: 1970,
            val: 3691172616
        }, {
            arg: 1980,
            val: 4449048798
        }, {
            arg: 1990,
            val: 5320816667
        }, {
            arg: 2000,
            val: 6127700428
        }, {
            arg: 2010,
            val: 6916183482
        }];
        this.areas = [{
            country: "Russia",
            area: 12
        }, {
            country: "Canada",
            area: 7
        }, {
            country: "USA",
            area: 7
        }, {
            country: "China",
            area: 7
        }, {
            country: "Brazil",
            area: 6
        }, {
            country: "Australia",
            area: 5
        }, {
            country: "India",
            area: 2
        }, {
            country: "Others",
            area: 55
        }];
    }
}


@NgModule({
    imports: [DxChartModule, DxPieChartModule, CardModule],
    declarations: [ChartsComponent]
})
export class ChartsModule { }
