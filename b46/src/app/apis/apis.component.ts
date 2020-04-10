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
  constructor(private users:UsersService) { }

  ngOnInit(): void {

    this.users.listUsers().subscribe((res:any) => {
      //success
      
      console.log(res);
      this.usersList = res.data;
    }, (err)=>{
      // failure
      console.log(err)
    })
  }

}

// function(){ // anynomous 
//   this keyword belogns to the funciton
// }

// () => { //arrow functions
// this keyword belogns to parent
// }