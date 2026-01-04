import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-example',
  imports: [],
  templateUrl: './lifecycle-example.html',
  styleUrl: './lifecycle-example.css',
})
export class LifecycleExample {
  @Input() lifecycle_methodsCounter:number=0;
  name :string='';
  constructor(){
    console.log("lifecycle example constructor called!");
    this.name='constructor';
  }
  ngOnInit(){
    console.log("ngOnInit called!");
    this.name='ngOnInit';
  } 
  ngOnDestroy(){
    console.log("ngOnDestroy Called!");
  }
  ngOnChanges(){
    console.log("ngOnChanges Called!");
  }
}
