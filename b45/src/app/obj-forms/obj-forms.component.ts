import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent implements OnInit {

  user:any = {};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res);
    },()=>{

    })
  }

  login(){
    alert(`${this.user.fname} :: ${this.user.lname}`)
  }

}
