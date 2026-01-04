import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User 
{
  constructor(private route: ActivatedRoute){}
  name:string | null='';
  id:number | null=null;
  ngOnInit():void{
    this.route.params.subscribe(params=>{
      this.name=params['name'];
      this.id=params['id'];
    })
  }

}
