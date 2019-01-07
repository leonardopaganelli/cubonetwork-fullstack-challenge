import { DefaultTableComponent } from './default-table.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

describe('DefaultTableComponent', () => {
    let defaultTableComponent: DefaultTableComponent;
    let fixture: ComponentFixture<DefaultTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            DefaultTableComponent
        ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultTableComponent);
        defaultTableComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should init component with default values', () => {
        defaultTableComponent.ngOnChanges();

        expect(defaultTableComponent.data).toEqual([]);
        expect(defaultTableComponent.headerTable).toEqual([]);
        expect(defaultTableComponent.keysTable).toEqual([]);
        expect(defaultTableComponent.customHeaderTable).toEqual(undefined);
        expect(defaultTableComponent.captionTable).toEqual(undefined);
    });

    it('Should not attribute value to keysTable and headerTable when data is empty ', () => {
        defaultTableComponent.data = [];

        defaultTableComponent.ngOnChanges();

        expect(defaultTableComponent.keysTable).toEqual([]);
        expect(defaultTableComponent.headerTable).toEqual([]);
    });

    it('Should not attribute value to keysTable and headerTable when data is array without keys', () => {
        defaultTableComponent.data = ['test'];

        defaultTableComponent.ngOnChanges();

        expect(defaultTableComponent.keysTable).toEqual([]);
        expect(defaultTableComponent.headerTable).toEqual([]);
    });

    it('Should attribute data keys to keysTable and headerTable', () => {
        defaultTableComponent.data = mockData();

        defaultTableComponent.ngOnChanges();

        expect(defaultTableComponent.keysTable).toEqual(mockKeysTable());
        expect(defaultTableComponent.headerTable).toEqual(mockKeysTable());
    });

    it('Should attribute custom headerTable', () => {
        defaultTableComponent.data = mockData();

        defaultTableComponent.customHeaderTable = [
            'customHeaderOne',
            'customHeadetTwo'
        ];

        defaultTableComponent.ngOnChanges();

        expect(defaultTableComponent.keysTable).toEqual(mockKeysTable());
        expect(defaultTableComponent.headerTable).toEqual(mockCustomHeaders());
    });

    function mockData() {
        return [{
            keyOne: 'valueOne',
            keyTwo: 'valueTwo'
        }];
    }

    function mockKeysTable() {
        return [
            'keyOne',
            'keyTwo'
        ];
    }

    function mockCustomHeaders() {
        return [
            'customHeaderOne',
            'customHeadetTwo'
        ];
    }
});
