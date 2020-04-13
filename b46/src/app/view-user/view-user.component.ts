import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  id:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((data:any)=>{
      console.log(data);
      this.id = data.id;
    })
  }

}
