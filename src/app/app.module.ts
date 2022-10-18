import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CuberootPipe } from './cuberoot.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GreetComponent } from './greet/greet.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyDirectiveDirective,
    PipedemoComponent,
    CuberootPipe,
    ErrorpageComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
