import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*

       $(document).ready(function(){
         $('#team-slider').owlCarousel({
           autoplay:true,
           smartSpeed:700,
           loop:true,
           autoplayHoverPause:true,
           responsive:{
               0:{
                   items:1
               },
               576:{
                   items:2
               },
               768:{
                   items:3
               }
           }
       });
       });
     */
  }

}
