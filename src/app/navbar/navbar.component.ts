import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  depts: Dept[];
  
  getDepts(): void {
  this.srvService.getDepts()
      .subscribe(depts => this.depts = depts);
  }

  constructor(private srvService: SrvService) { }
  
  ngOnInit() {
    this.getDepts();
  }
  
  clear(): void{
    clear_js();
  }
}

function clear_js(){
  document.getElementById("dis").innerHTML="";
}