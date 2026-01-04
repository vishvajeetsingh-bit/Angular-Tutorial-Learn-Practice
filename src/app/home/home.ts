import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router){}

  goToProfile(){
    this.router.navigate(['profile'],{queryParams:{name:'Vishvajeet Singh'}});
  }
  usersHome=
  [{
    id:1,
    name:'Vishwa',
    age:21
  },
  {
    id:2,
    name:'Anil',
    age:21
  },
  {
    id:3,
    name:'Kundu',
    age:21
  },
  {
    id:4,
    name:'Kirti',
    age:21
  }]
}
