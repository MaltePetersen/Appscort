import {Component, OnInit} from '@angular/core';
import {DiensteService} from '../_service/dienste.service';

@Component({
    selector: 'app-dienstpost',
    templateUrl: './dienstpost.component.html',
    styleUrls: ['./dienstpost.component.sass']
})
export class DienstpostComponent implements OnInit {
    dienst = 'test';

    constructor(private dienstPostService: DiensteService) {
    }

    ngOnInit() {
        this.dienstPostService.post(this.dienst);
    }

}
