import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.scss']
})
export class DirComponent implements OnInit {

  fname:string = 'qshore';
  fruits: string[] = ['kiwi', 'melon', 'berry'];

  counter = 0;
  lname:string;
  constructor() { }

  ngOnInit(): void {
  }

  callMe(){
    console.log(this.counter);
    this.counter++
  }
}
