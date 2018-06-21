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
    fetch_data(this.dept.name);
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

function fetch_data(str)
{
  var database = firebase.database();
  var dep=str;
  console.log(dep);
  var dataref=database.ref(dep);
  console.log(dataref);
  dataref.once('value').then(function(snapshot){
    console.log(snapshot);
    var refs=[];
    function recur_data(obj)
    {
        console.log("Hi recursion");
        refs.push(obj.key);
        if(obj.left.key)
        {
          recur_data(obj.left);
        }
        if(obj.right.key)
        {
          recur_data(obj.right);
        }
    }
    recur_data(snapshot.node_.children_.root_);
    console.log(snapshot.node_.children_.root_);
    console.log(refs);
    for (var i=0;i<refs.length;i++){
      document.getElementById("dis").innerHTML+='<a href="http://coursedb-2000.firebaseapp.com/course-files/'+dep+'@'+refs[i]+'">'+refs[i]+'</a><br>';
    }
  })
}

