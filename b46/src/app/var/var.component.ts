import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.scss']
})
export class VarComponent implements OnInit {

  fname:string = 'qshore'; //string
  gender:boolean = true; //boolean
  age:number = 45; //number
  interest:null = null; //null
  fruits:string[] = ['kiwi', 'melon', 'berry']; // array
  user:any = {tech:'angular', exp:56}; // object
  undf:any; //undefined

  a = 2;
  b = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
