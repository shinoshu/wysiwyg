import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ckeditor4-angular';

import { Ckeditor4Component } from './ckeditor4/ckeditor4.component';

@NgModule({
  declarations: [Ckeditor4Component],
  imports: [
    CommonModule,
    CKEditorModule,
  ]
})
export class Ckeditor4Module { }
