import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-default-table',
    templateUrl: './default-table.component.html',
    styleUrls: [
        './default-table.component.scss'
    ]
})

export class DefaultTableComponent implements OnChanges {
    @Input() data = [];
    @Input() customHeaderTable?: string[];
    @Input() captionTable?: string;

    headerTable: string[] = [];
    keysTable: string[] = [];

    ngOnChanges() {
        if (this.data.length > 0 && typeof this.data[0] === 'object') {
            this.keysTable = Object.keys(this.data[0]);
            this.headerTable = this.customHeaderTable || this.keysTable;
        }
    }

}
