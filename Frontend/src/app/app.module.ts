import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/Open/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TemplateNavbarComponent} from './components/Open/template-navbar/template-navbar.component';
import {FeaturesComponent} from './components/Open/features/features.component';
import {PortfolioComponent, DialogDataExampleDialog} from './components/Open/portfolio/portfolio.component';
import {TeamComponent} from './components/Open/team/team.component';
import {ContactComponent} from './components/Open/contact/contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PricingComponent} from './components/Open/pricing/pricing.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {VideoComponent} from './components/Open/video/video.component';
import {AppRoutingModule} from './app-routing.module';
import {WelcomePageComponent} from './components/Open/welcome-page/welcome-page.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from './utils/app-init';
import {ContractServiceService} from './services/contract-service.service';
import {HttpClientModule} from '@angular/common/http';
import { DienstpostComponent } from './components/Closed/dienstpost/dienstpost.component';
import {DiensteService} from './services/dienste.service';
import { ListDiensteComponent } from './components/Closed/list-dienste/list-dienste.component';
import {FormsModule} from '@angular/forms';
import { NavbarLoggedInComponent } from './components/Closed/navbar-logged-in/navbar-logged-in.component';
import {EmailServiceService} from './services/email-service.service';
import { PaypalComponent } from './components/Closed/paypal/paypal.component';

export class YourAppModule {
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TemplateNavbarComponent,
        FeaturesComponent,
        PortfolioComponent,
        PricingComponent,
        TeamComponent,
        VideoComponent,
        ContactComponent,
        PricingComponent,
        DialogDataExampleDialog,
        WelcomePageComponent,
        DienstpostComponent,
        ListDiensteComponent,
        NavbarLoggedInComponent,
        PaypalComponent
    ],
    imports: [
        MDBBootstrapModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        MatDialogModule,
        AppRoutingModule,
        KeycloakAngularModule,
        HttpClientModule,
        FormsModule
    ],
    entryComponents: [PricingComponent, DialogDataExampleDialog],
    providers: [
        ContractServiceService,
        EmailServiceService,
        DiensteService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
