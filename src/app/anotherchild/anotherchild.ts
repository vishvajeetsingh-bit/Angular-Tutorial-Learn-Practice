import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-anotherchild',
  imports: [],
  templateUrl: './anotherchild.html',
  styleUrl: './anotherchild.css',
})
export class Anotherchild {
  @Output() getAnotherChildUsers = new EventEmitter();
  anotherChildUsersArray: string[]=["Vishwa","Peter","Ned","Stark"];

  // ngOnInit(){
  //   this.getAnotherChildUsers.emit(this.anotherChildUsersArray);
  // }
  loadData(){
    this.getAnotherChildUsers.emit(this.anotherChildUsersArray);
  }

}
