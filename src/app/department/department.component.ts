import { Component, OnInit, Input } from '@angular/core';
import { Dept } from '../dept';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SrvService }  from '../srv.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {
  @Input() dept: Dept;
  constructor(
  	private route: ActivatedRoute,
  	private srvService: SrvService,
  	private location: Location
  ) {
    route.params.subscribe(val => {
    this.getDept();
  });
  }

  ngOnInit() {
  }

  getDept(): void {
  const link = this.route.snapshot.paramMap.get('link');
  this.srvService.getDept(link)
    .subscribe(dept => this.dept = dept);
 }

}
