import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers:[UsersService]
})
export class ApisComponent implements OnInit {

  usersList:any;
  userInfo :any;
  constructor(private users:UsersService ) { }

  ngOnInit(): void {

      this.listUsers();
  }

  listUsers(){
    this.users.listUsers().subscribe((res:any)=>{
      console.log(res);
      this.usersList = res.data;
    }, (err:any)=>{
      alert('asdfasdf')
    })
  }

  createUser(){
    this.users.addUser().subscribe((res)=>{
      this.userInfo = res;
      this.listUsers();
    },(err)=>{

    })
  }

  viewUser(id){
    this.users.viewUser(id).subscribe((res)=>{
      this.userInfo = res;
    },(err)=>{

    });
  }

  editUser(id){
    this.users.editUser(id).subscribe((res)=>{
      this.userInfo = res;
      this.listUsers();
    },(err)=>{

    })

  }

  deleteUser(id){
    this.users.deleteUser(id).subscribe((res)=>{
      this.userInfo = res;
      this.listUsers();
    },(err)=>{

    })

  }

}
