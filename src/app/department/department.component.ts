import { Component, OnInit, Input } from '@angular/core';
import { Dept } from '../dept';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() dept: Dept;
  constructor() { }

  ngOnInit() {
  }

}
