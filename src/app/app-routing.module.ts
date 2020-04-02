import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'ckeditor4', loadChildren: () => import('./ckeditor4/ckeditor4.module').then(m => m.Ckeditor4Module) },
  { path: 'ckeditor5', loadChildren: () => import('./ckeditor5/ckeditor5.module').then(m => m.Ckeditor5Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
