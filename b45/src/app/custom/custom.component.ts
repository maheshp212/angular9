import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() user:any = {};

  @Output() sendName = new EventEmitter();
  @Output() sendAge = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  age(){
    this.sendAge.emit(this.user.age);
  }

  name(){
    let name = this.user.fname + this.user.lname;
    this.sendName.emit(name);
  }
}
