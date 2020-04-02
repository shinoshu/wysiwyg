import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CKEditorModule as CKEditor4Module } from 'ckeditor4-angular';
import { CKEditorModule as CKEditor5Module } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ckeditor4Component } from './ckeditor4/ckeditor4.component';
import { Ckeditor5Component } from './ckeditor5/ckeditor5.component';

@NgModule({
  declarations: [
    AppComponent,
    Ckeditor4Component,
    Ckeditor5Component
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CKEditor4Module,
    CKEditor5Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
