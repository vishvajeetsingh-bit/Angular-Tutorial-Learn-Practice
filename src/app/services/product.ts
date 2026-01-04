import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  
  constructor(private httpClient:HttpClient){
    // console.log("Constructor of Product Service Called!");
  }

  // getProductData(){
  //   return [
  //     {name : 'S23', brand:'samsung', type:'smartphone'},
  //     {name : 'washer', brand:'samsung', type:'washing machine'},
  //     {name : '20 w adapter', brand:'samsung', type:'charger'}
  //   ]
  // }
  
  // CALL API IN ANGULAR ----------------------

  getProductsList(){
    const url="https://dummyjson.com/products";
    return this.httpClient.get(url);
  }
}
