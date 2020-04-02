import { Component } from '@angular/core';

@Component({
  selector: 'app-ckeditor4',
  templateUrl: './ckeditor4.component.html',
  styleUrls: ['./ckeditor4.component.css']
})
export class Ckeditor4Component {
  data = '<p>Hello, world!</p>';

  submit() {
    alert(this.data);
  }
}
