import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  fname = 'QsHoRe';
  age = 34;
  today = new Date();
  user = {tech:'angular',exp:45};

  constructor() { }

  ngOnInit(): void {
  }

}
