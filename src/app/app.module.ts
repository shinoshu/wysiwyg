import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CKEditorModule } from 'ckeditor4-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ckeditor4Component } from './ckeditor4/ckeditor4.component';

@NgModule({
  declarations: [
    AppComponent,
    Ckeditor4Component
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CKEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
