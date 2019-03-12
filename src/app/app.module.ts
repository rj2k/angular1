import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChoiceComponent } from './choice/choice.component';
import { config } from 'rxjs/internal/config';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent,pathMatch:'full'},
  {path: 'choice', component: ChoiceComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    HomeComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [ChoiceComponent],
  bootstrap: [AppComponent,]
})
export class AppModule { }
