import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname = 'qshores';
  fruits = ['kiwi', 'melon', 'berry'];
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }
}
