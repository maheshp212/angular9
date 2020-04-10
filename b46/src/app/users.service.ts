import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }

  listUsers(){
    var url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  viewUser(id){
    var url = 'http://api.qshore.com/view-user/' + id;
    return this.http.get(url);
  }

  addUser(){
    var url = 'http://api.qshore.com/add-user';
    var data = {
      fname: 'Ravi',
      lname:'kumar',
      age:23,
      email:'ravikumar@123',
      password:'kumar123'
    }
    return this.http.post(url, data);
  }

  editUser(id){
    var url = 'http://api.qshore.com/edit-user/' + id;
    var data = {
      fname: 'rajesh',
      lname:'C',
      age:23,
      email:'rajeshc@123',
      password:'c123'
    }
    return this.http.put(url, data);
  }


  deleteUser(id){
    var url = 'http://api.qshore.com/delete-user/' + id;
    return this.http.delete(url);
  }
}
