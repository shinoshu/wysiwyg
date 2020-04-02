import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CKEditorModule } from 'ckeditor4-angular';

import { Ckeditor4RoutingModule } from './ckeditor4-routing.module';
import { Ckeditor4Component } from './ckeditor4/ckeditor4.component';

@NgModule({
  declarations: [Ckeditor4Component],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    CKEditorModule,
    Ckeditor4RoutingModule,
  ]
})
export class Ckeditor4Module { }
