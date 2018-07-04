import { Component, OnInit } from '@angular/core';

/// <reference path="../../../fetchby_cc.d.ts" />
import Fetchbycc from '../../../fetchby_cc';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  dept: string;
  cocode: string;

  constructor() { 
    document.body.classList.add('bg-img-courses');
  }

  ngOnInit() {
  this.dept=getDepartment();
  this.cocode=getCocode();
  new Fetchbycc().fetchby_cc(this.dept,this.cocode);
  }

}

function getDepartment(){
  var address=window.location.href;
  var dept_start=address.indexOf("@");
  var dept_end=address.lastIndexOf("@");
  var dept=address.slice(dept_start+1,dept_end);
  return dept;
}


function getCocode(){
  var address=window.location.href;
  var cocode_start=address.lastIndexOf("@");
  var cocode=address.slice(cocode_start+1,address.length);
  document.getElementById("ccode").innerHTML=cocode;
  return cocode;
}