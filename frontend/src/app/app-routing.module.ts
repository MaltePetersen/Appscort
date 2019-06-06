import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {VideoComponent} from './video/video.component';
import {AppAuthGuard} from './app.authguard';
import {DienstpostComponent} from './dienstpost/dienstpost.component';
import {ListDiensteComponent} from './list-dienste/list-dienste.component';

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
