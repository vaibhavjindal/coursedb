import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  depts: Dept[];
  selectedDept: Dept;
  
  getDepts(): void {
  this.srvService.getDepts()
      .subscribe(depts => this.depts = depts);
  }

  constructor(private srvService: SrvService) { }
  
  ngOnInit() {
    this.getDepts();
  }
  
  onSelect(dept: Dept): void {
    this.selectedDept = dept;
  }

}
