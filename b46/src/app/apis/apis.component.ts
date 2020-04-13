import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers:[UsersService]
})
export class ApisComponent implements OnInit {

  usersList:any = [];
  userInfo:any;
  constructor(private users:UsersService, private router: Router) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    this.users.listUsers().subscribe((res:any) => {
      //success
      
      console.log(res);
      this.usersList = res.data;
    }, (err)=>{
      // failure
      console.log(err)
    })
  }

  viewUser(id){
    this.users.viewUser(id).subscribe((res:any) => {
      //success
      this.userInfo = res;
    },(err)=>{
      //failure
    })
  }

  createUser(){
    this.users.addUser().subscribe((res:any) => {
      //success
      this.userInfo = res;
      this.listUsers();
    },(err)=>{
      //failure
    })
  }

  editUser(id){
    this.users.editUser(id).subscribe((res:any) => {
      //success
      this.userInfo = res;
      this.listUsers();
    },(err)=>{
      //failure
    })
  }
  deleteUser(id){
    
    this.users.deleteUser(id).subscribe((res:any) => {
      //success
      this.userInfo = res;
      this.listUsers();
    },(err)=>{
      //failure
    });

    
    
  }

  viewUserNav(id){
    this.router.navigate(['/view-user/' + id]);
  }

}

// function(){ // anynomous 
//   this keyword belogns to the funciton
// }

// () => { //arrow functions
// this keyword belogns to parent
// }