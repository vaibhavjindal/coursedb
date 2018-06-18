import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {


  depts: Dept[];
  selectedDept: Dept;
  permission: number;

  getDepts(): void {
  this.depts = this.srvService.getDepts2();
  }

  up_files(key: number): void{
    this.permission=key;
  }

  constructor(private srvService: SrvService) { }
  
  ngOnInit() {
  this.getDepts();
  }

  onSelect(dept: Dept): void {
    this.selectedDept = dept;
  }
  
}
