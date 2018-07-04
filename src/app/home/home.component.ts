import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


function get_json(){
	var all=[];
  var url="https://coursedb-2000.firebaseio.com/.json";
  var request=new XMLHttpRequest();
  request.open('GET',url);
  request.responseType='json';
  request.send();
  request.onload=function(){
    console.log('script loaded');
    var data=request.response;

    console.log(data);
    for(let depts in data){

    for(let fname in data[depts]){
    	var obj=data[depts][fname]
    	var cname=obj['coursename']
    	var ccode=obj['coursecode']
    	var sem=obj['sem'];
    	var upname=obj['upname'];
    	var year=obj['year'];

    	var str=depts+'@'+ccode+year+sem+upname+'#'+cname+'%'+ccode;
    	all.push(str)
    	
    	}
    }
   }
    console.log(all)
  }
