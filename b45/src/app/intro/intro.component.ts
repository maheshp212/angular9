import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  fname = 'qshore';
  user = {fname:'qshore', lname:'tech', age:5};
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log('logic from parent data')
  }

  checkData(a){

    console.log('#################')
    console.log(a)
    console.log('#################')


  }

  getName(name){
    alert(name);
  }
  sendAge(age){
    alert(age);
  }
}
