import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  users = 
  [
    {"firstname":"sidali","lastname":"fetoumi"},
    {"firstname":"john doe","lastname":"messi"},
    {"firstname":"john smith","lastname":"karim"}
  ];

  deleteUser(i : number) : void{
    this.users.splice(i,1)
  }
  createNewUser(user : any) : void {
    this.users.push(user);
  }
  findUserById(id:number){
    let user = this.users[id];
    return user;
  }
  editUser(id : number , user : any){
    this.users[id] = user;
  }
  constructor() {
    
   }
}
