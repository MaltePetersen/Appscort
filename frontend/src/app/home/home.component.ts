import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    // DEFAULT STATES
    trigger('enterLeave', [
      // :ENTER TRANSITION
      // Transition Styles
      transition('void => *', [
        // 'From' styles
        style({
          opacity: 0.2,
          transform: 'translateY(130%)'
        }),
        animate('1000ms ease-out',
          // 'To' Style
          style({ opacity: 1, transform: 'scale(1)' }),
        )
      ]),
      transition('* => void', [
        animate('1000ms ease-in-out',
          style({
            opacity: 0.2,
            transform: 'translateY(130%)'
          })
        )
      ]),

    ]),
  ]
})
export class HomeComponent implements OnInit {

  start = false;

  @HostListener('window:scroll', ['$event'])
  bounceIn() {
    const scrollPosition = window.pageYOffset;
    console.log("window.pageYOffset")
    console.log(scrollPosition)

    if (scrollPosition <= 300) {
      this.start = true;
    } else {
      this.start = false;
    }
  }
  constructor() {

  }


  ngOnInit() {
    $(document).ready(function () {
      $(window).scroll(function () {
        $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
      });
    });

  }

}
