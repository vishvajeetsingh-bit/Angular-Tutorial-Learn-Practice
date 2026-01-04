import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusablechild',
  imports: [],
  templateUrl: './reusablechild.html',
  styleUrl: './reusablechild.css',
})
export class Reusablechild {
  @Input() reusableChildUser:string='';

}
