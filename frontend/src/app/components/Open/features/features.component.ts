import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import * as $ from 'jquery';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass'],
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
export class FeaturesComponent implements OnInit {

  start = false;
  start_feature = false;
  start_featureIconsR1 = false;
  start_featureIconsR2 = false;
  start_featureIconsR3 = false;
  start_featureIconsR4 = false;

  @HostListener('window:scroll', ['$event'])
  bounceIn() {
    const scrollPosition = window.pageYOffset;
    console.log("window.pageYOffset")
    console.log(scrollPosition)

    if (scrollPosition >= 150) {
      this.start = true;
    } else {
      this.start = false;
    }
    if (scrollPosition >= 380) {
      this.start_feature = true;
    }
    else {
      this.start_feature = false;
    }
    if (scrollPosition >= 550) {
      this.start_featureIconsR1 = true;
    }
    else {
      this.start_featureIconsR1 = false;
    }
    if (scrollPosition >= 750) {
      this.start_featureIconsR2 = true;
    }
    else {
      this.start_featureIconsR2 = false;
    }
    if (scrollPosition >= 1200) {
      this.start_featureIconsR3 = true;
    }
    else {
      this.start_featureIconsR3 = false;
    }
    if (scrollPosition >= 1500) {
      this.start_featureIconsR4 = true;
    }
    else {
      this.start_featureIconsR4 = false;
    }

  }

  constructor() { }

  ngOnInit() {
  }
}
