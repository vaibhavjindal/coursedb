import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { DEPTS } from '../dept-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  depts=DEPTS;
  selectedDept: Dept;
  constructor() { }

  ngOnInit() {
  }

  onSelect(dept: Dept): void {
    this.selectedDept = dept;
  }
}
