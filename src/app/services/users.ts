import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserModel } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class Users {
  url:string="http://localhost:3000/users";
  constructor(private httpClient:HttpClient){
    // console.log("Constructor of Product Service Called!");
  }
  
  getUsersList():Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this.url);
  }

  addUserToList(userRequest:UserModel):Observable<UserModel>{
    return this.httpClient.post<UserModel>(this.url,userRequest);
  }
  deleteUserById(id:string):Observable<UserModel>{
    const deleteUrl=`${this.url}/${id}`;
    return this.httpClient.delete<UserModel>(deleteUrl);
  }
  getUserById(id:string):Observable<UserModel>{
    const getUrl=`${this.url}/${id}`;
    return this.httpClient.get<UserModel>(getUrl);
  }
  updateUserById(userRequest:UserModel):Observable<UserModel>{
    const updateUrl=`${this.url}/${userRequest.id}`;
    return this.httpClient.put<UserModel>(updateUrl,userRequest);
  } 
}
