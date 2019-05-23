import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass'],
  animations: [

    // DEFAULT STATES
    trigger('leftRight', [
      // :ENTER TRANSITION
      // Transition Styles
      transition('void => *', [
        // 'From' styles
        style({
          opacity: 0.2,
          transform: 'translateX(-100vw)'
        }),
        animate('500ms ease',
          // 'To' Style
          style({ opacity: 1, transform: 'scale(1)' }),
        )
      ]),
      transition('* => void', [
        animate('500ms ease-in-out',
          style({
            opacity: 0.2,
            transform: 'translateX(-100vw)'
          })
        )
      ]),
    ]),

    trigger('rightLeft', [
      // :ENTER TRANSITION
      // Transition Styles
      transition('void => *', [
        // 'From' styles
        style({
          opacity: 0.2,
          transform: 'translateX(+100vw)'
        }),
        animate('500ms ease',
          // 'To' Style
          style({ opacity: 1, transform: 'scale(1)' }),
        )
      ]),
      transition('* => void', [
        animate('500ms ease-in-out',
          style({
            opacity: 0.2,
            transform: 'translateX(+100vw)'
          })
        )
      ]),
    ]),

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
        animate('500ms ease-out',
          // 'To' Style
          style({ opacity: 1, transform: 'scale(1)' }),
        )
      ]),
      transition('* => void', [
        animate('500ms ease-in-out',
          style({
            opacity: 0.2,
            transform: 'translateY(130%)'
          })
        )
      ]),
    ]),
  ],
})
export class TeamComponent implements OnInit {

  start_teamIconsR1 = false;
  start_teamIconsR2 = false;
  start_pricingIconsR3 = false;
  start_pricingIconsR4 = false;
  start_pricingIconsR5 = false;

  @HostListener('window:scroll', ['$event'])
  bounceIn() {
    const scrollPosition = window.pageYOffset;
    console.log("window.pageYOffset")
    console.log(scrollPosition)

    if (scrollPosition >= 3800) {
      this.start_teamIconsR1 = true;
    }
    else {
      this.start_teamIconsR1 = false;
    }
    if (scrollPosition >= 4000) {
      this.start_teamIconsR2 = true;
    }
    else {
      this.start_teamIconsR2 = false;
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
