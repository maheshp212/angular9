import { Directive, Input, Output,EventEmitter, HostListener } from '@angular/core';

//1. inputs and output
//2. nested component --
//3. dynamic logics
// 4. onPageLoad or onEventLoad

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  @Input()  fname;
  @Input()  msg;
  @Input() appAttr(){}

  @Output() sendata = new EventEmitter();


  constructor() {
    console.log('onPage Load');
   }


  @HostListener('click')
  aaa(){
    console.log('onEvent Load');
    console.log(this.fname);
    console.log(this.msg);
    this.appAttr();
    this.sendata.emit('hello');
  }

}
