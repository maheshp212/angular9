import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname = 'QsHoRe';
  date = new Date();
  num = 34;

  user = {tech:'angular', exp:45};
  constructor() { }

  ngOnInit(): void {
    // products
    // formateedProducts
  }

}
