import { DonutChartComponent } from './donut-chart.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DonutCustomizeModel } from './donut-customize.model';
import { DonutDataModel } from './donut.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DonutChartComponent', () => {
    let donutChartComponent: DonutChartComponent;
    let fixture: ComponentFixture<DonutChartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            DonutChartComponent
        ],
        schemas: [
            CUSTOM_ELEMENTS_SCHEMA
        ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DonutChartComponent);
        donutChartComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should init component with default values', () => {
        donutChartComponent.ngOnChanges();

        expect(donutChartComponent.customChart).toEqual(customChartDefault());
    });

    it('Should attribute data(array smaller than five itens) to customChart.results', () => {
        donutChartComponent.data = mockDataSmallerThanFive();

        donutChartComponent.ngOnChanges();

        expect(donutChartComponent.customChart.results).toEqual(mockDataSmallerThanFive());
    });

    it('Should results order and reduce itens after fourth in others, when data length bigger than four', () => {
        donutChartComponent.data = mockDataBiggerThanFour();

        donutChartComponent.ngOnChanges();

        expect(donutChartComponent.customChart.results).toEqual(mockResultsBiggerThanFour());
    });

    function customChartDefault(): DonutCustomizeModel {
        return {
            view: [
                280,
                280
            ],
            scheme: {
                domain: [
                    '#bcc2c7',
                    '#9c56b8',
                    '#ea4b35',
                    '#15ba9a',
                    '#2c96dd',
                    '#f4f806',
                    '#f86a06',
                    '#875203'
                ]
            },
            results: [],
            legend: false,
            labels: false,
            doughnut: true,
            tooltipDisabled: true
        };
    }

    function mockDataSmallerThanFive(): DonutDataModel[] {
        return [
            {
                name: 'firstValue',
                value: 1
            },
            {
                name: 'SecondValue',
                value: 2
            }
        ];
    }

    function mockDataBiggerThanFour(): DonutDataModel[] {
        return [
            {
                name: 'firstValue',
                value: 1
            },
            {
                name: 'SecondValue',
                value: 2
            },
            {
                name: 'ThirdValue',
                value: 3
            },
            {
                name: 'FourthValue',
                value: 4
            },
            {
                name: 'FifthValue',
                value: 5
            },
            {
                name: 'SixthValue',
                value: 6
            },
            {
                name: 'SeventhValue',
                value: 7
            }
        ];
    }

    function mockResultsBiggerThanFour(): DonutDataModel[] {
        return [
            {
                name: 'SeventhValue',
                value: 7
            },
            {
                name: 'SixthValue',
                value: 6
            },
            {
                name: 'FifthValue',
                value: 5
            },
            {
                name: 'FourthValue',
                value: 4
            },
            {
                name: 'ThirdValue',
                value: 3
            },
            {
                name: 'others',
                value: 3
            }
        ];
    }
});
