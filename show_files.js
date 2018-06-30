class Show{
  show_files(){
  	var url=window.location.href;
  	var temp=url.indexOf('files');
  	var dep_end=url.indexOf("@",temp);
  	var dep= decodeURIComponent(url.slice(temp+6,dep_end));
  	var course= decodeURIComponent(url.slice(dep_end+1));
  	var database = firebase.database();
  	var newref=database.ref(dep+"/"+course);
  	document.getElementById("cf").innerHTML+=dep+">"+course+"<br>";
    document.getElementById("l_notes").innerHTML+="Lecture Notes<br>";
    document.getElementById("l_assign").innerHTML+="Assignments<br>";
    document.getElementById("l_others").innerHTML+="others<br>";
    var l=document.getElementById("l_notes");
    var a=document.getElementById("l_assign");
    var o=document.getElementById("l_others");

  	newref.once('value').then(function(snap){
        console.log(snap.val());
        var data=snap.val();
        var lecturelist=data.notes;
        var assignlist=data.assign;
        var otherslist=data.others;
        var storageref=firebase.storage().ref();
        console.log(typeof(lecturelist));
        console.log(typeof(assignlist));
        console.log(typeof(otherslist));

        //printing lectures
        function load_lectures(x)
        {
          storageref.child(data.department+"/"+data.coursecode+"/"+lecturelist[x]).getDownloadURL().then(function(url){
            console.log("i is "+x);
            l.innerHTML+="<a href="+url+">"+lecturelist[x]+"</a><br>";
            console.log(lecturelist+"       "+x);
          })
        }
        if(typeof(lecturelist) != "undefined")
        {
          for(var i=0;i<lecturelist.length;i++)
          {
            console.log("i is "+i);
            load_lectures(i);
          }
        }
        else
        {
          document.getElementById("l_notes").style.display='none';
          document.getElementById("notes_download").style.display='none';
        }
        //printing assignments
        function load_assign(y)
        {
          storageref.child(data.department+"/"+data.coursecode+"/"+assignlist[y]).getDownloadURL().then(function(url){
            console.log("j is "+y);
            a.innerHTML+="<a href="+url+">"+assignlist[y]+"</a><br>";
            console.log(assignlist+"       "+y);
          })
        }
        if(typeof(assignlist) != "undefined")
        {
          for(var j=0;j<assignlist.length;j++)
          {
            console.log("j is "+j);
            load_assign(j);
          }
        }
        else
        {
          document.getElementById("l_assign").style.display='none';
          document.getElementById("assign_download").style.display='none';
        }
        //printing others
        function load_others(z)
        {
          storageref.child(data.department+"/"+data.coursecode+"/"+otherslist[z]).getDownloadURL().then(function(url){
            console.log("k is "+z);
            o.innerHTML+="<a href="+url+">"+otherslist[z]+"</a><br>";
            console.log(otherslist+ "       "+z);
          })
        }
        if(typeof(otherslist) != "undefined")
        {
          for(var k=0;k<otherslist.length;k++)
          {
            console.log("k is "+k);
            load_others(k);
          }
        }
        else
        {
          document.getElementById("l_others").style.display='none';
          document.getElementById("others_download").style.display='none';
        }
      })
  }

}
export default Show;
