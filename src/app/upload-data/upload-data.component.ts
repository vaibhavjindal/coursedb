import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { SrvService } from '../srv.service';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {


  depts: Dept[];
  selectedDept: Dept;
  permission: number;
  selected = 'Aerospace Engineering';

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

}
