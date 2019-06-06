import {Component, OnInit} from '@angular/core';
import {DiensteService} from '../_service/dienste.service';
import {Dienst} from '../domain/dienst';
import * as $ from 'jquery';

@Component({
    selector: 'app-list-dienste',
    templateUrl: './list-dienste.component.html',
    styleUrls: ['./list-dienste.component.sass']
})
export class ListDiensteComponent implements OnInit {

    dienstList: Dienst[];

    constructor(private dienstService: DiensteService) {
    }

    ngOnInit() {
        this.dienstList = [];
        this.dienstService.get().subscribe((data) => console.log(this.dienstList = data));
        $('.navbar').addClass('solid');


    }

}
