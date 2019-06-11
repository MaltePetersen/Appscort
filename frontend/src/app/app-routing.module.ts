import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePageComponent} from './components/Open/welcome-page/welcome-page.component';
import {VideoComponent} from './components/Open/video/video.component';
import {AppAuthGuard} from './app.authguard';
import {DienstpostComponent} from './components/Closed/dienstpost/dienstpost.component';
import {ListDiensteComponent} from './components/Closed/list-dienste/list-dienste.component';

const routes: Routes = [
    {path: '', component: WelcomePageComponent},
    {path: 'post', component: DienstpostComponent, canActivate: [AppAuthGuard]},
    {path: 'dienstliste', component: ListDiensteComponent, canActivate: [AppAuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AppAuthGuard]

})
export class AppRoutingModule {
}
