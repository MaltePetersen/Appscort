import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-template-navbar',
  templateUrl: './template-navbar.component.html',
  styleUrls: ['./template-navbar.component.sass']
})
export class TemplateNavbarComponent implements OnInit, AfterViewInit {
  auth = false;

  constructor(private keycloakService: KeycloakService) {
  }

  login() {
    this.keycloakService.login();
  }

  logout() {
    this.keycloakService.logout();
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.navbar').addClass('solid');
        } else {
          $('.navbar').removeClass('solid');
        }
      });
    });

    /*--- Mobile Navigation Schließen onClick ---*/
    $(document).ready(function () {
      $(document).click(function (event) {
        /* wo habe ich geklickt? Sicherstellen, dass ich im Menü glicke nicht im DOM*/
        var clickOnIt = $(event.target);
        var _geöffnet = $('.navbar-collapse').hasClass('show');
        if (_geöffnet === true && !clickOnIt.hasClass('navbar-toggler')) {
          $('.navbar-toggler').click();
        }
      });
    });

    /*--- Smooth Scrolling zu den Links ---*/
    $(document).ready(function () {
      $('a').on('click', function (event) {
        var href = $(this).attr('href');
        if (href !== '') {
          event.preventDefault();
          const hash = href;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {
            window.location.hash = hash;
          });
        }
      });
    });

    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
          $('.top-scroll').fadeIn();
        } else {
          $('.top-scroll').fadeOut();
        }
      });
    });

  }


  async ngOnInit() {
    this.auth = await this.keycloakService.isLoggedIn();

  }

}


