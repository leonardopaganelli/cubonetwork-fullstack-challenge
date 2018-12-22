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
    @Input() headerTable?: string[];
    @Input() captionTable: string;

    tableHeader: string[] = [];
    tableKeys: string[] = [];

    ngOnChanges() {
        this.tableKeys = Object.keys(this.data[0]);
        this.tableHeader = this.headerTable || this.tableKeys;
    }

}
