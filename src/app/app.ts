import { afterEveryRender, afterNextRender, afterRenderEffect, Component, computed, effect, Signal, signal, ViewChild, WritableSignal } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormsModule, RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // count:number=0;
  // handleMouseEvent(event : MouseEvent){
  //   console.log("function called",event.type); 
  //   // console.log((event.target as Element).className);
  // }
  // handleInputEvent(event : Event){
  //   console.log("function called",event.type);
  //   // console.log((event.target as Element).className);
  // }

  // handleCounter(val? : string){
  //   if(val === 'increment'){
  //     this.count++;
  //   } else if(val === 'decrement'){
  //     if(this.count==0){
  //       return;
  //     }
  //     this.count--;
  //   } else {
  //     this.count = 0;
  //   }
  // }

  // internalFunction(a: number,b:number){
  //   console.log(a+b);
  // }

  // name: string ='';
  // displayName : string = '';
  // email : string ='';  
  // getName(event:Event){ 
  //   this.name = (event.target as HTMLInputElement).value;
  //   // console.log("Name entered in the input box : ", this.name);
  //   // console.log(event); 
  // }
  // showName(){
  //   this.displayName = this.name!;
  // }
  // setName(){
  //   this.name = "Vishvajeet Chhillar";
  // }
  // getEmail(input:string){
  //   this.email = input;
  // }
  // setEmail(){
  //   this.email="vishvajeet@yahoo.com";
  // }
  // ifElseDisplayFlag=true;
  // divColor:number=1;
  // toggleIfElseDisplayFlag(){
  //   this.ifElseDisplayFlag = !this.ifElseDisplayFlag;
  // }
  // handleDivColor(val:number | Event){
  //   if(typeof val === "object")
  //   {
  //     this.divColor= parseInt((val.target as HTMLInputElement).value);
  //   }
  //   else if(typeof val === "number"){
  //     this.divColor=val;
  //   }
  //   return;
  // }
  // users=["Vishvajeet","John","Doe","Smith"];
  // students=[{name:"Vishvajeet",age:24},{name:"John",age:22},
  //           {name:"Doe",age:23},
  //           {name:"Smith",age:21}];
  // getStudentsName(name:string){
  //   console.log(name); 
  // }
  // count=signal(0);
  // constructor(){
  //   effect(()=>{
  //     console.log("Count value changed to : ",this.count());
  //   })
  // }
  // dataSignal :WritableSignal<string| null>=signal<string | null>(null);
  // computedSignal :Signal<string | null>=computed(()=>this.dataSignal + " Computed!");
  // updateDataSignal(){
  //   this.dataSignal.set("Hello from dataSignal!");
  // }
  // x:WritableSignal<number>=signal(1);
  // y:WritableSignal<number>=signal(1);
  // sum:Signal<number>=computed(()=>this.x()+this.y());

  // updateSignals(){
  //   console.log("Updating signals: Before Update: X =",this.x()," Y =",this.y()," Sum =",this.sum());
  //   console.log("Incrementing X and Y by 1"); 
  //   this.x.set(this.x()+1);
  //   this.y.set(this.y()+1);
  //   console.log("After Update: X =",this.x()," Y =",this.y()," Sum =",this.sum());
  //}

  // username: WritableSignal<string>=signal("Guest");
  // welcomeMessage: Signal<string>=computed(()=>`Welcome, ${this.username()}!`);
  // displayheading:WritableSignal<boolean>=signal(true);
  // displayHeadingCount :WritableSignal<number>=signal(0);
  // constructor(){
  //   effect(()=>{
  //     // console.log("Username changed to: ",this.username());
  //     // console.log(this.welcomeMessage());
  //     if(this.displayHeadingCount()%2==0 && this.displayHeadingCount()!=0){
  //       this.displayheading.set(true);
  //       setTimeout(()=>{
  //         this.displayheading.set(false);
  //       },2000);
  //     } else {
  //       this.displayheading.set(false);
  //     }
  //   }); 
  // }
  // toggleValue(){
  //   this.displayHeadingCount.set(this.displayHeadingCount()+1);
  // }
  // contextualUsers : string[] = ['Alice', 'Bob', 'Charlie', 'Diana'];
  // twoWayData:string='';


  // TODO LIST -------------------------------


  // task:string='';
  // tasksList :{id:number,task:string}[]=[];
  // addTask(){
  //   if(this.task.trim().length==0){
  //     return;
  //   }
  //   else{
  //     this.tasksList.push({id:this.tasksList.length+1,task:this.task});
  //      this.task='';
  //     console.log(this.tasksList);
  //   }
  // }
  // deleteTask(id:number){
  //   this.tasksList=this.tasksList.filter(taskObj=>taskObj.id!==id);
  // }


  // Dynamic Styling -----------------------------
  // bgColor:string='lightblue';
  // headingFontSize_Small:string='16px';
  // headingFontSize_Big:string='32px';
  // zoomIn:boolean=false;
  
  // toggleZoom(){
  //   this.zoomIn = !this.zoomIn;
  // }

  //Directives In Angular -------------------------
  // showDirectiveDemo:boolean=true;
  // toggleDirectiveDemo(){
  //   this.showDirectiveDemo = !this.showDirectiveDemo;
  // }


  //BASIC REACTIVE FORMS IN ANGULAR -------------------
  // name= new FormControl();
  // password= new FormControl();
  // displayFormValues(){
  //   console.log(this.name.value,this.password.value)
  // }
  // setFormValues(){
  //   this.name.setValue('vishwa');
  //   this.password.setValue('vishwa@1');
  // }

  //FORM GROUPING IN REACTIVE FORMS IN ANGULAR -----------
  // loginForm:FormGroup= new FormGroup({
  //   name:new FormControl('',[Validators.required]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   email:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  // });

  // get loginFormName()
  // {
  //   return this.loginForm.get('name')
  // }
  // get loginFormPassword()
  // {
  //   return this.loginForm.get('password')
  // }
  // get loginFormEmail()
  // {
  //   return this.loginForm.get('email')
  // }

  // onLoginFormSubmit():void{
  //   console.log(this.loginForm.value);
  // }
  // setLoginFormValues(){
  //   this.loginForm.setValue({
  //     name:'Kirti Chaudhary',
  //     password:'Kirti@1',
  //     email:'kirti12@gmail.com'
  //   });
  //   console.log("login form values changed to : ",this.loginForm.value);
  //   }

  //Template Driven Forms ---------------------------------------
  // templateFormUser:any={};
  // addTemplateFormDetails(value:NgForm){
  //   console.log(value);
  //   this.templateFormUser=value;
  // }
  
  // Pass Data between Child & Parent Component ------------------
  // childUsername:string="bruce";
  // onSelectedUserChange(selectedUser:string):void{
  //   this.childUsername=selectedUser;
  // }



  //REUSE COMPONENTS-------------------------------------

  // usersArray: string[]=["Vishwa","Peter","Ned","Stark"];


  //PASS DATA FROM CHILD COMPONENT TO PARENT COMPONENT--------------------------
  // anotherChildUsersArray : undefined | string[];
  // handleAnotherChildUsers(users:string[]){
  //   console.log(users);
  //   this.anotherChildUsersArray=users;
  // }

  // CUSTOM PIPES IN ANGULAR -----------------------------
  // amount : number=10;


  //Life cycle methods in Angular

  //  @ViewChild('lifecylcle') LifecycleExample:any
  // constructor(){
  //   afterEveryRender(()=>{
  //     console.log("After Every Render Called For Lifecycle Component");
  //   })

  //   afterNextRender(()=>{
  //     console.log("After Next Render Called For Lifecycle Component");
  //   })
  // }
  // lifecycle_methodsCounter:number=0;
  // updatelifecyclemethodcounter(){
  //   this.lifecycle_methodsCounter++;
  // }

  // Services In Angular ------------------------

//   productData:{
//     name: string;
//     brand: string;
//     type: string;
// }[]|undefined|null=null;
  // constructor(private productService: Product){
  //    console.log("App Component Constructor Called !");
  // }
  // getProductData():void{
  //   this.productData = this.productService.getProductData();
  //   console.log(this.productData);
  // }
  // productsList : any;
  // getProductsList(){
    
  //   this.productService.getProductsList().subscribe((data:any)=>{
  //     console.log(data);
  //     this.productsList=data.products;
  //   })
  // }



  // CALL JSON-SERVER API IN ANGULAR ---------------------------------

  
  // constructor(private userService:Users){

  // }
  // apiUsers:UserModel[]=[];
  // selectedUser:UserModel | undefined  ;
  // ngOnInit(){
  //   this.getusersList();
  // }
  // getusersList(){
  //   this.userService.getUsersList().subscribe((data:UserModel[])=>{
  //     // console.log(data);
  //     this.apiUsers=data;
  //   });
  // }

  // addUserToJsonUsers(userRequest:UserModel){
  //   if(!this.selectedUser){
  //     console.log("Adding user to JSON Server API");
  //     console.log(userRequest);
  //     this.userService.addUserToList(userRequest).subscribe((data:UserModel)=>{
  //     if(data)
  //       {
  //         console.log("User added successfully:",data);
  //         this.getusersList();
  //       }
  //     else
  //       {
  //         console.log("Failed to add user");
  //       }
  //     });
  //   }
  //   else{
  //     const userData= {...userRequest,id:this.selectedUser.id};
  //     console.log("Updating user with id:",userData?.id);
  //     this.userService.updateUserById(userData ).subscribe((data:UserModel)=>{
  //       if(data){
  //         console.log("User updated successfully:",data);
  //         this.getusersList();
  //       }
  //       else{
  //         console.log("Failed to update user");
  //       }
  //     });
  //   }
    
  // }

  // deleteUserById(id:string){
  //   console.log("Deleting user with id:",id);
  //   this.userService.deleteUserById(id).subscribe((data:UserModel)=>{
  //     console.log("User deleted successfully with id:",id);
  //     if(data){
  //       console.log("Deleted user data:",data);
  //       this.getusersList();
  //     }
  //     else{
  //       console.log("Failed to delete user with id:",id);
  //     }
  //   });
  //  }
  // updateUserById(id:string,updateUserData:UserModel|undefined=undefined)
  // {
  //   console.log("Updating user with id:",id);
  //   this.userService.getUserById(id).subscribe((userData:UserModel)=>{
  //     if(userData){
  //       console.log("Fetched user data for update:",userData);
  //       this.selectedUser=userData;
  //     }
  //     else{
  //       console.log("Failed to fetch user data for id:",id);
  //       return; 
  //     }
  //   });
  // }  


}
