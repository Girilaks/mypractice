import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DisplayGenderPipe } from './pipes/display-gender.pipe';
import { Practice1Component } from './practice1/practice1.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { ObservableSubjectComponent } from './observable-subject/observable-subject.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AuthInterceptor } from './common/auth.interceptor';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayGenderPipe,
    Practice1Component,
    PromiseObservableComponent,
    ObservableSubjectComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
   // alert ("Call function when application bootstrap")
  }
  // ngDoBootstrap(){
  //   alert ("Hello")
  // }
}
