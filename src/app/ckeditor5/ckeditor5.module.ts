import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { Ckeditor5Component } from './ckeditor5/ckeditor5.component';

@NgModule({
  declarations: [Ckeditor5Component],
  imports: [
    CommonModule,
    CKEditorModule,
  ]
})
export class Ckeditor5Module { }
