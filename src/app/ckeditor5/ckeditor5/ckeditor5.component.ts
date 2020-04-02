import { Component } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ckeditor5',
  templateUrl: './ckeditor5.component.html',
  styleUrls: ['./ckeditor5.component.css']
})
export class Ckeditor5Component {
  public Editor = ClassicEditor;
}
