import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {DiensteService} from '../../../services/dienste.service';


@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {
    public safeURL: SafeResourceUrl;
    test: any;

    constructor(private _sanitizer: DomSanitizer, private dienstService: DiensteService) {
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MZ640VE8zNA');
    }

    ngOnInit() {
        // console.log(this.test);


    }

}
