import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconsModule } from './core/svg-icon/svg-icon.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SvgIconsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],

  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
