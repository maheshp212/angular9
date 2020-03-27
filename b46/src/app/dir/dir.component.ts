import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.scss']
})
export class DirComponent implements OnInit {

  fname:string = 'qshore';
  fruits: string[] = ['kiwi', 'melon', 'berry'];

  constructor() { }

  ngOnInit(): void {
  }

}
