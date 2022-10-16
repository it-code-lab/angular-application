import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CuberootPipe } from './cuberoot.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyDirectiveDirective,
    PipedemoComponent,
    CuberootPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
