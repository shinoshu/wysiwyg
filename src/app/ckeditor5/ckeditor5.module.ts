import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { Ckeditor5RoutingModule } from './ckeditor5-routing.module';
import { Ckeditor5Component } from './ckeditor5/ckeditor5.component';

@NgModule({
  declarations: [Ckeditor5Component],
  imports: [
    CommonModule,
    CKEditorModule,
    Ckeditor5RoutingModule,
  ]
})
export class Ckeditor5Module { }
