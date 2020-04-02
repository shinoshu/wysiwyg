import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ckeditor5Component } from './ckeditor5/ckeditor5.component';

const routes: Routes = [
  { path: '', component: Ckeditor5Component }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ckeditor5RoutingModule { }
