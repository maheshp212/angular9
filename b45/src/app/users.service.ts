import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//import {Observable} from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:any;

  constructor(private http:HttpClient) { }

  listUsers(){
    let url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  // listUsersData(){
  //   new Observable((observer) => {
  //     if(this.users){
  //       return this.users;
  //     } else {
  //     this.listUsers().subscribe((res:any)=>{
  //       this.users = res;
  //       observer.next(res)
  //       observer.complete()
  //     }, (err)=>{
  //       observer.error(err);
  //     })
  //   }
    
  // })
  // }

  
  viewUser(id){
    let url = 'http://api.qshore.com/view-user/'+id;
    return this.http.get(url);
  }

  addUser(){
    let url = 'http://api.qshore.com/add-user';
    let user = {
      fname: 'Mohan',
      lname:'Lal',
      age:'23',
      email:'mohanlal@123',
      password:'lal123'
    }
    return this.http.post(url, user);
  }

  editUser(id){
    let url = 'http://api.qshore.com/edit-user/'+id;
    let user = {
      fname: 'ram',
      lname:'kishan',
      age:'23',
      email:'ramkishan@123',
      password:'ram123'
    }
    return this.http.put(url, user);
  }

  deleteUser(id){
    let url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }


}
