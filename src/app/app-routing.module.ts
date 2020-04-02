import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ckeditor4Component } from './ckeditor4/ckeditor4.component';

const routes: Routes = [
  { path: 'ckeditor4', component: Ckeditor4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
