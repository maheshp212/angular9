import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
    let url = 'http://api.qshore.com/users';
    return this.http.get(url);

  }
  
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
