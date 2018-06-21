import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-files',
  templateUrl: './course-files.component.html',
  styleUrls: ['./course-files.component.css']
})
export class CourseFilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	show_files();
  }

}

function show_files(){
	var url=window.location.href;
	var temp=url.indexOf('files');
	var dep_end=url.indexOf("@",temp);
	var dep= decodeURIComponent(url.slice(temp+6,dep_end));
	var course= decodeURIComponent(url.slice(dep_end+1));
	var database = firebase.database();
	var newref=database.ref(dep+"/"+course);
	document.getElementById("cf").innerHTML+=dep+">"+course+"<br>";

	newref.once('value').then(function(snap){
      console.log(snap.val());
      var data=snap.val();
      var lecturelist=data.notes;
      var assignlist=data.assign;
      var otherslist=data.others;
      var storageref=firebase.storage().ref();
      
      //printing lectures
      for(var j=0;j<lecturelist.length;j++)
      {
      storageref.child(data.department+"/"+data.coursecode+"/"+lecturelist[j]).getDownloadURL().then(function(url){
        console.log("Hi urls");
        console.log(url);
        document.getElementById("cf").innerHTML+="<a href="+url+">"+lecturelist[j]+"</a><br>";
      })
      }
      
      //printing assignments
      for(var j=0;j<assignlist.length;j++)
      {
      storageref.child(data.department+"/"+data.coursecode+"/"+assignlist[j]).getDownloadURL().then(function(url){
        console.log("Hi urls");
        console.log(url);
        document.getElementById("cf").innerHTML+="<a href="+url+">"+assignlist[j]+"</a><br>";
      })
      }
      
      //printing others
      for(var j=0;j<otherslist.length;j++)
      {
      storageref.child(data.department+"/"+data.coursecode+"/"+otherslist[j]).getDownloadURL().then(function(url){
        console.log("Hi urls");
        console.log(url);
        document.getElementById("cf").innerHTML+="<a href="+url+">"+otherslist[j]+"</a><br>";
      })
      }
    }
}