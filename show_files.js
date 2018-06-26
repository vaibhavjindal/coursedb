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

  	newref.once('value').then(function(snap){
        console.log(snap.val());
        var data=snap.val();
        var lecturelist=data.notes;
        var assignlist=data.assign;
        var otherslist=data.others;
        var storageref=firebase.storage().ref();
        console.log(lecturelist.length);
        console.log(assignlist.length);
        console.log(otherslist.length);
        console.log(typeof(lecturelist));
        console.log(typeof(assignlist));
        console.log(typeof(otherslist));

        //printing lectures
        for(var i=0;i<lecturelist.length;i++)
        {
          console.log("i is "+i);
        storageref.child(data.department+"/"+data.coursecode+"/"+lecturelist[i]).getDownloadURL().then(function(url){
          console.log("i is "+i);
          console.log(typeof(url));
          document.getElementById("cf").innerHTML+="<a href="+url+">"+lecturelist[i-1]+"</a><br>";
          console.log(lecturelist+"       "+i);
        })
        }

        //printing assignments
        for(var j=0;j<assignlist.length;j++)
        {
          console.log("j is "+j);
        storageref.child(data.department+"/"+data.coursecode+"/"+assignlist[j]).getDownloadURL().then(function(url){
          console.log("j is "+j);
          document.getElementById("cf").innerHTML+="<a href="+url+">"+assignlist[j-1]+"</a><br>";
          console.log(assignlist+"       "+j);
        })
        }

        //printing others
        for(var k=0;k<otherslist.length;k++)
        {
          console.log("k is "+k);
        storageref.child(data.department+"/"+data.coursecode+"/"+otherslist[k]).getDownloadURL().then(function(url){
          console.log("k is "+k);
          document.getElementById("cf").innerHTML+="<a href="+url+">"+otherslist[k-1]+"</a><br>";
          console.log(otherslist+ "       "+k);
        })
        }
      })
  }
}
export default Show;
