import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { SrvService } from '../srv.service';
import {MatRadioModule} from '@angular/material/radio';

/// <reference path="../../../upload_data.d.ts" />
import Upload from '../../../upload_data';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {


  depts: Dept[];
  selectedDept: Dept;
  permission: number;
  s_dept : string;
  s_course : string;
  s_year : string;
  semester: string;
  designation: string;

  getDepts(): void {
  this.srvService.getDepts()
      .subscribe(depts => this.depts = depts);
  }
  
  onSelect(key: string): void {
    this.selectedDept = this.depts.find((val) => val.name == key);
    console.log(this.selectedDept.name);
  }
  
  up_files(key: number): void{
    this.permission=key;
  }

  constructor(private srvService: SrvService) { 
    
  }

  ngOnInit() {
  this.getDepts();
  }

  fun(): void{
    new Upload().upload_data(this.s_dept,this.s_course,this.s_year,this.semester,this.designation);
  }

}

