import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent {

  fname:string = 'qshore';
  age:number = 34;
  gender:boolean = true;
  interest: null = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {name:'hello', tech:'angular'};
  undf:any;

  a = 2;
  b = 3;
  
  constructor() { }

}
