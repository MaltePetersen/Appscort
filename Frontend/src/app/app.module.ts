import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateLoginComponent } from './_template/template-login/template-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateNavbarComponent } from './_template/template-navbar/template-navbar.component';
import { FeaturesComponent } from './features/features.component';
import { PortfolioComponent, DialogDataExampleDialog } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PricingComponent } from './pricing/pricing.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { VideoComponent } from './video/video.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import { initializer } from './utils/app-init';

export class YourAppModule {
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateLoginComponent,
    TemplateNavbarComponent,
    FeaturesComponent,
    PortfolioComponent,
    PricingComponent,
    TeamComponent,
    VideoComponent,
    ContactComponent,
    PricingComponent,
    DialogDataExampleDialog,
    WelcomePageComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  entryComponents: [PricingComponent, DialogDataExampleDialog],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
