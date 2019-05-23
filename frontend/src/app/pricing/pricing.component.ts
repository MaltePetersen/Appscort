import { Component, HostListener} from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.sass'],
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
export class PricingComponent {

  start_pricing = false;
  start_pricingIconsR1 = false;
  start_pricingIconsR2 = false;
  start_pricingIconsR3 = false;
  start_pricingIconsR4 = false;
  start_pricingIconsR5 = false;

  @HostListener('window:scroll', ['$event'])
  bounceIn() {
    const scrollPosition = window.pageYOffset;
    console.log("window.pageYOffset")
    console.log(scrollPosition)

    if (scrollPosition >= 2800) {
      this.start_pricing = true;
    }
    else {
      this.start_pricing = false;
    }
    if (scrollPosition >= 3000) {
      this.start_pricingIconsR1 = true;
    }
    else {
      this.start_pricingIconsR1 = false;
    }
    if (scrollPosition >= 1950) {
      this.start_pricingIconsR2 = true;
    }
    else {
      this.start_pricingIconsR2 = false;
    }
    if (scrollPosition >= 2200) {
      this.start_pricingIconsR3 = true;
    }
    else {
      this.start_pricingIconsR3 = false;
    }
    if (scrollPosition >= 2250) {
      this.start_pricingIconsR4 = true;
    }
    else {
      this.start_pricingIconsR4 = false;
    }
    if (scrollPosition >= 2600) {
      this.start_pricingIconsR5 = true;
    }
    else {
      this.start_pricingIconsR5 = false;
    }

  }

  constructor() {}


}


