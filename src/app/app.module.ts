import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

import { rootRouterConfig } from './app.routes';

enableProdMode();



@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  declarations: [
    AppComponent, HomeComponent, FormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
