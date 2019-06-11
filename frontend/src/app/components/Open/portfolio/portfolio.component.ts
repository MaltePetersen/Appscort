import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import * as $ from 'jquery';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
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
export class PortfolioComponent {

  start_portfolio = false;
  start_portfolioIconsR1 = false;
  start_portfolioIconsR2 = false;
  start_portfolioIconsR3 = false;
  start_portfolioIconsR4 = false;
  start_portfolioIconsR5 = false;

  @HostListener('window:scroll', ['$event'])
  bounceIn() {
    const scrollPosition = window.pageYOffset;
    console.log("window.pageYOffset")
    console.log(scrollPosition)

    if (scrollPosition >= 1800) {
      this.start_portfolio = true;
    }
    else {
      this.start_portfolio = false;
    }
    if (scrollPosition >= 1900) {
      this.start_portfolioIconsR1 = true;
    }
    else {
      this.start_portfolioIconsR1 = false;
    }
    if (scrollPosition >= 1930) {
      this.start_portfolioIconsR2 = true;
    }
    else {
      this.start_portfolioIconsR2 = false;
    }
    if (scrollPosition >= 2200) {
      this.start_portfolioIconsR3 = true;
    }
    else {
      this.start_portfolioIconsR3 = false;
    }
    if (scrollPosition >= 2230) {
      this.start_portfolioIconsR4 = true;
    }
    else {
      this.start_portfolioIconsR4 = false;
    }
    if (scrollPosition >= 2600) {
      this.start_portfolioIconsR5 = true;
    }
    else {
      this.start_portfolioIconsR5 = false;
    }

  }

  constructor(public dialog: MatDialog) {}

  openDialog(src) {
    this.dialog.open(DialogDataExampleDialog, {
      data: src
    });
  }
}

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

